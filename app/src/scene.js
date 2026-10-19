// Memory Game — 2D carnival booth renderer: themed booth, target cards on a shelf, thrown ammo, flips, prizes.
import { roundRect } from "./kit/ui.js";
import { ease, clamp, lerp } from "./kit/fx.js";
import { ANIMAL_PICS } from "./rules.js";

const FONT = 'Fredoka, "Noto Sans", "Noto Sans KR", "Noto Sans JP", "Noto Sans SC", "Noto Sans Arabic", "Noto Sans Thai", "Noto Sans Devanagari", system-ui, sans-serif';
const THEMES = {
  fair: { sky: ["#7cc8ff", "#d8f0ff"], a: "#e63946", b: "#fff3e0", wood: "#8c4a2f", ground: "#7bc96f" },
  boardwalk: { sky: ["#ffb38a", "#ffe3c4"], a: "#2ec4b6", b: "#fefae0", wood: "#a26b3f", ground: "#e9c891" },
  field: { sky: ["#9fd8ff", "#fdf6d8"], a: "#e2a322", b: "#fff8e1", wood: "#7a5230", ground: "#9bcf53" },
  western: { sky: ["#ff9e57", "#ffd9a0"], a: "#b5562b", b: "#f7e1b5", wood: "#6b3f22", ground: "#d9a066" },
  forest: { sky: ["#6fb98f", "#d4f1d4"], a: "#2e7d4f", b: "#f1f8e9", wood: "#5a3a22", ground: "#4f9a50" },
  seaside: { sky: ["#4cc9f0", "#caf0f8"], a: "#3d5afe", b: "#ffffff", wood: "#8d6e63", ground: "#f4d58d" },
};
const CARNY = { ray: ["#ff7043", "🧢"], nia: ["#26c6da", "🕶️"], walt: ["#8d6e63", "👴"], cowboy: ["#a1887f", "🤠"], june: ["#ab47bc", "👵"], pirate: ["#455a64", "🏴‍☠️"] };
const imgs = new Map();
function img(url) { if (!url) return null; let i = imgs.get(url); if (!i) { i = new Image(); i.decoding = "async"; i.src = url; imgs.set(url, i); } return i.complete && i.naturalWidth ? i : null; }

export function createScene(stage, L, fx) {
  const g = stage.g;
  let theme = THEMES.fair, def = { carny: "ray", ammo: "beanbags", theme: "fair" };
  let cards = [], ep = 0, shots = [], focusUid = null, prizeT = -1, prizeBig = false, carnyMood = { kind: "idle", t: 0 }, dealT = 0;
  const vis = new Map(); // uid -> { flip, target, gone, shake, pop }
  let geo = null;
  function layout() {
    const w = stage.w, h = stage.h, n = Math.max(1, cards.length);
    const top = h < 600 ? 96 : 118, bottom = clamp(h * 0.2, 110, 190);
    const aw = w - 24, ah = h - top - bottom;
    let best = null;
    for (let cols = 1; cols <= n; cols++) {
      const rows = Math.ceil(n / cols), gap = 12;
      const cw = Math.min((aw - gap * (cols - 1)) / cols, ((ah - gap * (rows - 1)) / rows) * 0.8);
      if (!best || cw > best.cw) best = { cols, rows, cw, ch: cw * 1.25, gap };
    }
    best.cw = Math.min(best.cw, 170); best.ch = best.cw * 1.25;
    const gw = best.cols * best.cw + (best.cols - 1) * best.gap, gh = best.rows * best.ch + (best.rows - 1) * best.gap;
    geo = { w, h, top, bottom, ...best, x0: (w - gw) / 2, y0: top + (ah - gh) / 2, gw, gh };
    return geo;
  }
  function rect(i) { const G = geo || layout(), c = i % G.cols, r = Math.floor(i / G.cols); return { x: G.x0 + c * (G.cw + G.gap), y: G.y0 + r * (G.ch + G.gap), w: G.cw, h: G.ch }; }
  const idx = (u) => cards.findIndex((c) => c.uid === u);
  const V = (u) => { let v = vis.get(u); if (!v) vis.set(u, (v = { flip: 0, target: 0, gone: 0, shake: 0, pop: 0, wave: 0 })); return v; };
  function center(u) { const i = idx(u); if (i < 0) return {}; layout(); const r = rect(i); const b = stage.canvas.getBoundingClientRect(); return { x: Math.round(b.left + r.x + r.w / 2), y: Math.round(b.top + r.y + r.h / 2) }; }
  function pick(x, y) {
    layout();
    for (let i = 0; i < cards.length; i++) { const r = rect(i), v = V(cards[i].uid); if (v.gone > 0) continue; if (x >= r.x - 6 && x <= r.x + r.w + 6 && y >= r.y - 6 && y <= r.y + r.h + 6) return cards[i].uid; }
    return null;
  }

  // ---------- background ----------
  function drawBooth() {
    const { w, h } = geo;
    const sky = g.createLinearGradient(0, 0, 0, h); sky.addColorStop(0, theme.sky[0]); sky.addColorStop(1, theme.sky[1]);
    g.fillStyle = sky; g.fillRect(0, 0, w, h);
    // bunting lights
    for (let i = 0; i < 3; i++) { g.fillStyle = "rgba(255,255,255,.5)"; const cx = ((i * 0.37 + L.t * 0.01) % 1) * w, cy = h * (0.08 + i * 0.05); g.beginPath(); g.arc(cx, cy, 24, 0, 7); g.arc(cx + 26, cy + 4, 18, 0, 7); g.arc(cx - 24, cy + 6, 16, 0, 7); g.fill(); }
    // awning stripes
    const aH = Math.min(70, h * 0.09), sw = Math.max(36, w / 14);
    for (let x = 0, k = 0; x < w; x += sw, k++) {
      g.fillStyle = k % 2 ? theme.b : theme.a; g.fillRect(x, 0, sw, aH);
      g.beginPath(); g.arc(x + sw / 2, aH, sw / 2, 0, Math.PI); g.fill();
    }
    g.fillStyle = "rgba(0,0,0,.12)"; g.fillRect(0, aH - 4, w, 4);
    // bulbs
    for (let x = sw / 2, k = 0; x < w; x += sw, k++) { const on = (Math.floor(L.t * 3) + k) % 3 !== 0; g.fillStyle = on ? "#fff59d" : "#c9b458"; g.beginPath(); g.arc(x, aH + sw / 2 + 6, 4, 0, 7); g.fill(); }
    // back wall panel + shelf
    const G = geo, px = G.x0 - 18, py = G.y0 - 16, pw = G.gw + 36, ph = G.gh + 32;
    g.fillStyle = "rgba(0,0,0,.18)"; roundRect(g, px + 4, py + 8, pw, ph, 22); g.fill();
    const wall = g.createLinearGradient(0, py, 0, py + ph); wall.addColorStop(0, shade(theme.wood, 30)); wall.addColorStop(1, theme.wood);
    g.fillStyle = wall; roundRect(g, px, py, pw, ph, 22); g.fill();
    g.strokeStyle = "rgba(255,255,255,.25)"; g.lineWidth = 3; roundRect(g, px + 6, py + 6, pw - 12, ph - 12, 18); g.stroke();
    // counter
    const cy = h - G.bottom + 26;
    g.fillStyle = shade(theme.wood, -20); g.fillRect(0, cy, w, h - cy);
    g.fillStyle = shade(theme.wood, 25); g.fillRect(0, cy, w, 10);
    g.fillStyle = theme.a; for (let x = 0, k = 0; x < w; x += 40, k++) if (k % 2) g.fillRect(x, cy + 10, 40, 14);
  }
  function shade(hex, amt) { const n = parseInt(hex.slice(1), 16); const f = (v) => clamp(v + amt, 0, 255); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; }

  // ---------- cards ----------
  function back(r) {
    const cx = r.w / 2, cy = r.h / 2, R0 = Math.min(r.w, r.h) * 0.36;
    g.fillStyle = "#fffaf0"; roundRect(g, 0, 0, r.w, r.h, 14); g.fill();
    g.strokeStyle = theme.a; g.lineWidth = 5; roundRect(g, 5, 5, r.w - 10, r.h - 10, 11); g.stroke();
    for (let k = 4; k >= 1; k--) { g.fillStyle = k % 2 ? theme.a : "#fff"; g.beginPath(); g.arc(cx, cy, (R0 * k) / 4, 0, 7); g.fill(); }
    g.fillStyle = "#ffd23f"; g.beginPath(); g.arc(cx, cy, R0 * 0.14, 0, 7); g.fill();
  }
  function text(t, r, max, y, col = "#1d2b45") {
    let fs = max; g.font = `700 ${fs}px ${FONT}`;
    while (fs > 10 && g.measureText(t).width > r.w * 0.86) { fs -= 2; g.font = `700 ${fs}px ${FONT}`; }
    g.fillStyle = col; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(t, r.w / 2, y);
  }
  function picture(c, r) {
    const url = c.picture || (c.fromSession ? "" : ANIMAL_PICS[String(c.animal || "").toLowerCase()]);
    const im = img(url), pad = 8, s = Math.min(r.w, r.h) - pad * 2;
    if (im) { const m = Math.min(im.width, im.height); g.save(); roundRect(g, (r.w - s) / 2, (r.h - s) / 2, s, s, 10); g.clip(); g.drawImage(im, (im.width - m) / 2, (im.height - m) / 2, m, m, (r.w - s) / 2, (r.h - s) / 2, s, s); g.restore(); return; }
    if (c.n) { // dots for numbers
      const t = clamp(Math.round(c.n), 1, 10), cols = t <= 3 ? t : t <= 6 ? 3 : t <= 8 ? 4 : 5, rows = Math.ceil(t / cols), cw = (r.w * 0.8) / cols, ch = (r.h * 0.6) / rows, rr = Math.min(cw, ch) * 0.34;
      const pal = ["#c1121f", "#2ec4b6", "#e2a322", "#ff4d8d", "#3d6bff", "#e85d04", "#7c4dff", "#2e9e4f"];
      for (let k = 0; k < t; k++) { g.fillStyle = pal[k % pal.length]; g.beginPath(); g.arc(r.w * 0.1 + (k % cols) * cw + cw / 2, r.h * 0.2 + Math.floor(k / cols) * ch + ch / 2, rr, 0, 7); g.fill(); }
      return;
    }
    text(c.itemEn ? "🖼️" : "🃏", r, r.h * 0.4, r.h / 2);
  }
  function faceDraw(c, r, v) {
    g.fillStyle = "#ffffff"; roundRect(g, 0, 0, r.w, r.h, 14); g.fill();
    g.strokeStyle = c.matched ? "#3ddc84" : "#ffd23f"; g.lineWidth = 5; roundRect(g, 3, 3, r.w - 6, r.h - 6, 12); g.stroke();
    if (c.face === "picture") return picture(c, r);
    if (c.face === "audio") {
      if (c.noAudio) return text(c.itemEn, r, r.h * 0.22, r.h / 2);
      const cx = r.w / 2, cy = r.h / 2, s = Math.min(r.w, r.h) * 0.2;
      g.fillStyle = "#3d6bff"; g.beginPath(); g.moveTo(cx - s * 1.2, cy - s * 0.5); g.lineTo(cx - s * 0.5, cy - s * 0.5); g.lineTo(cx + s * 0.3, cy - s * 1.2); g.lineTo(cx + s * 0.3, cy + s * 1.2); g.lineTo(cx - s * 0.5, cy + s * 0.5); g.lineTo(cx - s * 1.2, cy + s * 0.5); g.fill();
      g.strokeStyle = "#3d6bff"; g.lineWidth = 4; g.lineCap = "round";
      for (let k = 1; k <= 2; k++) { g.globalAlpha = 0.5 + 0.5 * Math.abs(Math.sin(L.t * 5 - k)); g.beginPath(); g.arc(cx + s * 0.4, cy, s * 0.7 * k, -0.8, 0.8); g.stroke(); }
      g.globalAlpha = 1; return;
    }
    if ((c.face === "digit" || c.face === "l1") && !c.text) return picture(c, r); // empty meaning shows the picture
    if (c.face === "word") { text(c.text, r, r.h * 0.24, c.l1 && L.locale !== "en" && c.l1 !== c.text ? r.h * 0.42 : r.h / 2); if (L.locale !== "en" && c.l1 && c.l1 !== c.text) text(c.l1, r, r.h * 0.13, r.h * 0.68, "#8a5a00"); return; }
    text(c.text, r, r.h * (c.face === "digit" ? 0.4 : 0.22), r.h / 2, c.face === "l1" ? "#8a2be2" : "#1d2b45");
  }
  function drawCards(dt) {
    dealT += dt;
    for (let i = 0; i < cards.length; i++) {
      const c = cards[i], v = V(c.uid), r = rect(i);
      v.flip += (v.target - v.flip) * Math.min(1, dt * 14);
      if (v.shake > 0) v.shake = Math.max(0, v.shake - dt * 2.5);
      if (v.pop > 0) v.pop = Math.max(0, v.pop - dt * 2);
      if (c.matched) v.gone = Math.min(1, v.gone + dt * 1.6);
      if (v.gone >= 1) continue;
      const din = ease.outBack(clamp((dealT - i * 0.05) / 0.4, 0, 1));
      if (din <= 0) continue;
      g.save();
      g.translate(r.x + r.w / 2 + Math.sin(L.t * 60) * 7 * v.shake, r.y + r.h / 2 - (1 - din) * 40 - ease.outCubic(v.gone) * 60);
      g.rotate(v.gone * 0.8 * (i % 2 ? 1 : -1));
      const sx = Math.abs(Math.cos(v.flip * Math.PI)) * din * (1 + v.pop * 0.12) * (1 - v.gone * 0.5);
      g.scale(Math.max(0.02, sx), din * (1 + v.pop * 0.12) * (1 - v.gone * 0.5));
      g.globalAlpha = 1 - v.gone;
      g.translate(-r.w / 2, -r.h / 2);
      g.fillStyle = "rgba(0,0,0,.2)"; roundRect(g, 3, 6, r.w, r.h, 14); g.fill();
      if (v.flip > 0.5) faceDraw(c, r, v); else back(r);
      if (focusUid === c.uid && L.view === "play") { g.strokeStyle = "#3d6bff"; g.lineWidth = 4; roundRect(g, -4, -4, r.w + 8, r.h + 8, 16); g.stroke(); }
      g.restore();
    }
    g.globalAlpha = 1;
  }

  // ---------- thrower + carny ----------
  function origin() { return { x: geo.w / 2, y: geo.h - 30 }; }
  function drawAmmo(kind, x, y, t) {
    g.save(); g.translate(x, y);
    const s = clamp(geo.cw * 0.18, 12, 26);
    if (kind === "beanbags") { g.rotate(t * 12); g.fillStyle = "#e63946"; roundRect(g, -s / 2, -s / 2, s, s, 5); g.fill(); g.fillStyle = "#fff"; g.fillRect(-s / 2, -2, s, 4); }
    else if (kind === "water") { g.fillStyle = "rgba(80,180,255,.85)"; g.beginPath(); g.arc(0, 0, s * 0.45, 0, 7); g.fill(); }
    else if (kind === "bow") { g.rotate(-Math.PI / 2); g.strokeStyle = "#5d4037"; g.lineWidth = 3; g.beginPath(); g.moveTo(-s, 0); g.lineTo(s, 0); g.stroke(); g.fillStyle = "#9e9e9e"; g.beginPath(); g.moveTo(s + 6, 0); g.lineTo(s - 2, -4); g.lineTo(s - 2, 4); g.fill(); }
    else if (kind === "gun") { g.fillStyle = "#ffd23f"; g.beginPath(); g.arc(0, 0, s * 0.25, 0, 7); g.fill(); }
    else if (kind === "axe") { g.rotate(t * 16); g.fillStyle = "#795548"; g.fillRect(-2, -s, 4, s * 2); g.fillStyle = "#b0bec5"; g.beginPath(); g.moveTo(2, -s); g.lineTo(s, -s * 0.6); g.lineTo(2, -s * 0.2); g.fill(); }
    else { g.rotate(Math.sin(t * 30) * 0.3); g.fillStyle = "#43a047"; g.beginPath(); g.ellipse(0, 0, s * 0.6, s * 0.4, 0, 0, 7); g.fill(); g.fillStyle = "#e53935"; g.beginPath(); g.arc(s * 0.5, -s * 0.2, s * 0.25, 0, 7); g.fill(); g.fillStyle = "#ffd23f"; g.fillRect(s * 0.7, -s * 0.25, 5, 3); }
    g.restore();
  }
  function drawShots(dt) {
    for (let k = shots.length - 1; k >= 0; k--) {
      const s = shots[k]; s.t += dt;
      const q = Math.min(1, s.t / s.dur), i = idx(s.uid); if (i < 0) { shots.splice(k, 1); continue; }
      const r = rect(i), o = origin(), to = { x: r.x + r.w / 2, y: r.y + r.h / 2 };
      const arc = s.ammo === "bow" || s.ammo === "gun" ? 0.05 : s.ammo === "water" ? 0.15 : 0.35;
      const mx = (o.x + to.x) / 2, my = Math.min(o.y, to.y) - geo.h * arc;
      const u = 1 - q, x = u * u * o.x + 2 * u * q * mx + q * q * to.x, y = u * u * o.y + 2 * u * q * my + q * q * to.y;
      if (s.ammo === "water" && !stage.low) for (let j = 1; j < 6; j++) { const qq = Math.max(0, q - j * 0.05), uu = 1 - qq; drawAmmo("water", uu * uu * o.x + 2 * uu * qq * mx + qq * qq * to.x, uu * uu * o.y + 2 * uu * qq * my + qq * qq * to.y, s.t); }
      drawAmmo(s.ammo, x, y, s.t);
      if (q >= 1 && !s.done) {
        s.done = true;
        fx.burst(to.x, to.y, { n: 14, color: s.ammo === "water" ? ["#bfe9ff", "#fff"] : ["#ffd23f", "#fff", theme.a], speed: 220, size: 5, life: 0.5, grav: 300 });
        fx.shake(3); V(s.uid).pop = 1;
        if (s.epoch === ep && s.onHit) s.onHit();
      }
      if (s.t > s.dur + 0.05) shots.splice(k, 1);
    }
  }
  function drawCarny() {
    const [col, hat] = CARNY[def.carny] || CARNY.ray;
    const r = clamp(geo.h * 0.06, 28, 52), x = r + 14, y = geo.h - geo.bottom * 0.45;
    carnyMood.t += 1 / 60;
    const bounce = carnyMood.kind === "hit" ? Math.abs(Math.sin(carnyMood.t * 12)) * 10 : 0, wob = carnyMood.kind === "miss" ? Math.sin(carnyMood.t * 30) * 0.15 : Math.sin(L.t * 2) * 0.05;
    if (carnyMood.t > 0.9) carnyMood.kind = "idle";
    g.save(); g.translate(x, y - bounce); g.rotate(wob);
    g.fillStyle = col; roundRect(g, -r * 0.9, r * 0.6, r * 1.8, r * 1.4, r * 0.5); g.fill();
    g.fillStyle = "#ffcc99"; g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill();
    g.fillStyle = "#1d2b45"; g.beginPath(); g.arc(-r * 0.35, -r * 0.1, r * 0.1, 0, 7); g.arc(r * 0.35, -r * 0.1, r * 0.1, 0, 7); g.fill();
    g.strokeStyle = "#1d2b45"; g.lineWidth = 3; g.beginPath();
    if (carnyMood.kind === "miss") g.arc(0, r * 0.5, r * 0.3, Math.PI * 1.15, Math.PI * 1.85); else g.arc(0, r * 0.2, r * 0.4, 0.2, Math.PI - 0.2);
    g.stroke();
    g.font = `${r * 1.1}px ${FONT}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(hat, 0, -r * 0.95);
    g.restore();
    if (carnyMood.kind !== "idle") {
      const t = carnyMood.kind === "hit" ? "Nice!" : "Oops!";
      g.font = `700 ${clamp(r * 0.55, 14, 24)}px ${FONT}`; const tw = g.measureText(t).width + 20, bx = x + r + 4, by = y - r * 1.6;
      g.fillStyle = "#fff"; roundRect(g, bx, by, tw, r * 0.9, r * 0.45); g.fill();
      g.fillStyle = carnyMood.kind === "hit" ? "#2e9e4f" : "#e63946"; g.textAlign = "center"; g.fillText(t, bx + tw / 2, by + r * 0.45 + 1);
    }
  }
  function drawThrower() {
    const o = origin(), s = clamp(geo.h * 0.05, 24, 44);
    g.fillStyle = "#ffcc99"; g.beginPath(); g.ellipse(o.x, o.y + s * 0.3, s * 0.7, s, 0, 0, 7); g.fill();
    g.fillStyle = theme.a; g.fillRect(o.x - s * 0.75, o.y + s * 0.8, s * 1.5, s);
    if (L.view === "play" && !shots.length) drawAmmo(def.ammo, o.x, o.y - s * 0.4, L.t * 0.2);
  }
  function drawPrize() {
    if (prizeT < 0) return;
    prizeT += 1 / 60;
    const k = ease.outBack(clamp(prizeT / 0.6, 0, 1)), cx = geo.w / 2, cy = geo.h * 0.45;
    g.fillStyle = `rgba(0,0,0,${0.35 * clamp(prizeT * 2, 0, 1)})`; g.fillRect(0, 0, geo.w, geo.h);
    g.save(); g.translate(cx, cy); g.rotate(Math.sin(prizeT * 3) * 0.08); g.scale(k, k);
    const R0 = Math.min(geo.w, geo.h) * (prizeBig ? 0.24 : 0.17);
    g.fillStyle = "rgba(255,240,150,.5)";
    for (let j = 0; j < 12; j++) { g.save(); g.rotate(prizeT + (j * Math.PI) / 6); g.beginPath(); g.moveTo(0, 0); g.lineTo(R0 * 2, -R0 * 0.25); g.lineTo(R0 * 2, R0 * 0.25); g.fill(); g.restore(); }
    g.font = `${R0 * 1.4}px ${FONT}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(prizeBig ? "🏆" : ["🧸", "🎈", "🦄", "🐻", "🎁", "🐙"][(L.round - 1) % 6], 0, 0);
    g.restore();
    g.font = `700 ${clamp(geo.w * 0.06, 26, 48)}px ${FONT}`; g.textAlign = "center"; g.lineWidth = 8; g.strokeStyle = "#1d2b45"; g.fillStyle = "#ffd23f";
    const t = prizeBig ? "CHAMPION!" : "YOU WIN A PRIZE!"; g.strokeText(t, cx, cy + Math.min(geo.w, geo.h) * 0.25); g.fillText(t, cx, cy + Math.min(geo.w, geo.h) * 0.25);
  }

  return {
    setTheme(d) { def = d; theme = THEMES[d.theme] || THEMES.fair; prizeT = -1; },
    setCards(list, preview) { ep++; cards = list; shots = []; vis.clear(); dealT = 0; prizeT = -1; focusUid = null; layout(); },
    throwAt(uid, ammo, onHit) { shots.push({ uid, ammo, t: 0, dur: ammo === "gun" ? 0.18 : ammo === "bow" ? 0.3 : 0.42, onHit, epoch: ep }); },
    flip(uid, on) { V(uid).target = on ? 1 : 0; },
    matched(uids, streak) {
      carnyMood = { kind: "hit", t: 0 };
      for (const u of uids) { const c = center(u), b = stage.canvas.getBoundingClientRect(); fx.burst(c.x - b.left, c.y - b.top, { n: 30, color: ["#ffd23f", "#3ddc84", "#ff5e7e", "#fff"], speed: 320, size: 6, life: 0.9, grav: 380 }); }
      const c = center(uids[1]), b = stage.canvas.getBoundingClientRect();
      fx.float(c.x - b.left, c.y - b.top - 20, streak >= 2 ? `MATCH ×${streak}` : "MATCH!", { color: "#ffe066", size: 32 });
      fx.flash("#fff7c2", 0.15);
    },
    miss(uids) { carnyMood = { kind: "miss", t: 0 }; for (const u of uids) V(u).shake = 1; fx.shake(6); },
    prize(big) { prizeT = 0; prizeBig = big; fx.confetti(stage.w / 2, stage.h * 0.3, big ? 160 : 90); },
    epoch: () => ep, pick, center, focus(u) { focusUid = u; },
    draw(dt) {
      layout();
      g.clearRect(0, 0, geo.w, geo.h);
      g.save(); fx.applyShake(g);
      drawBooth(); drawCards(dt); drawCarny(); drawThrower(); drawShots(dt);
      fx.draw(g); g.restore();
      drawPrize();
      fx.drawFlash(g, geo.w, geo.h);
    },
  };
}
