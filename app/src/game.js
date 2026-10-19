// Memory Game — carnival booth flow. Rules from rules.js, drawing from scene.js. Nothing is saved on the device.
import { createStage } from "./kit/stage.js";
import { createAudio } from "./kit/audio.js";
import { createFx } from "./kit/fx.js";
import { createInput } from "./kit/input.js";
import { el, esc, muteButton } from "./kit/ui.js";
import * as R from "./rules.js";
import { createScene3D } from "./scene3d.js";

const SFX = ["pop", "whoosh", "splash", "thud", "buzz", "chime", "sparkle", "flip", "click", "fanfare", "laser", "boom"];
const uid = (p) => (crypto.randomUUID ? `${p}_${crypto.randomUUID()}` : `${p}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`);

export async function startGame(host, { pack, ui, packs, packFile, embedded, wm, locale, playerName, playMode, studentId, quality }) {
  const stage = createStage(host, { quality: "high" }); // transparent 2D overlay for floating text / flashes
  stage.canvas.classList.add("overlay");
  const audio = createAudio({ sfx: Object.fromEntries(SFX.map((k) => [k, `./audio/sfx/${k}.mp3`])), music: "./audio/music-town-theme.mp3", musicVol: 0.14 });
  const fx = createFx(stage);
  const L = {
    view: "start", pack, ui, locale, embedded, playerName, playMode, teacherSkip: !embedded, sessionId: uid("session"),
    round: 1, heat: 0, heats: null, cards: [], open: [], locked: false, matched: 0, flyingUid: null, queuedUid: null, usedSkip: false,
    roundStartedAt: 0, completedMs: [], pairStartedAt: 0, streak: 0, bestStreak: 0, misses: 0, finishing: false, t: 0,
  };
  const records = [], board = []; // memory only (was localStorage)
  const S = (k) => R.uiString(ui, L.locale, k);
  const canSkip = () => (L.embedded ? false : L.playMode === "maker" ? true : !!L.teacherSkip);
  const scene = await createScene3D(host, L, fx, stage, { quality });

  // ---------- voice ----------
  const carnyLine = (kind) => { const d = R.roundDef(L.round); const id = kind === "round" ? `carnies/${d.carny}-round` : `carnies/${d.carny}-${kind}-${Math.random() < 0.5 ? 1 : 2}`; audio.clip(R.audioUrl(id), { vol: 0.95 }); };
  // Baked audio only. If a clip is missing the card shows the word instead (no text-to-speech).
  async function sayWord(card) {
    const url = R.audioUrl(String(card.audioId || "").replace(/\.mp3$/i, ""));
    const ok = url ? await audio.speak([url]) : false;
    if (!ok && !audio.isMuted()) card.noAudio = true;
  }

  // ---------- HUD ----------
  const hud = el(`<div class="hud">
    <div class="topbar"><span class="pill" id="h-round"></span><span class="pill" id="h-ammo"></span><span class="pill" id="h-time">0:00.00</span></div>
    <p class="lesson" id="h-lesson"></p>
    <div class="skipbar hidden" id="skipbar"><button type="button" id="skip-heat">Skip heat</button><button type="button" id="skip-round">Next round</button><span id="skip-rounds"></span></div>
    <div class="combo" id="h-combo"></div>
    <div class="card" id="start"></div>
    <div class="card hidden" id="end"></div>
    <div class="banner hidden" id="banner"></div>
    <div class="fade" id="fade"></div>
  </div>`);
  host.appendChild(hud); hud.appendChild(muteButton(audio));
  const $ = (id) => hud.querySelector("#" + id);
  const show = (id, on) => $(id).classList.toggle("hidden", !on);
  const totalMs = (now = performance.now()) => { const u = L.completedMs.reduce((a, b) => a + b, 0); return L.view !== "play" || !L.roundStartedAt ? u : u + (now - L.roundStartedAt); };
  function hudRefresh() {
    const d = R.roundDef(L.round);
    $("h-round").textContent = `${S("round")} ${L.round}/${R.ROUNDS}`;
    $("h-ammo").textContent = d.label;
    $("h-lesson").textContent = S(R.lessonKey(L.round));
    show("skipbar", canSkip() && L.view === "play");
    $("skip-rounds").innerHTML = [1, 2, 3, 4, 5, 6].map((r) => `<button type="button" class="rj${r === L.round ? " on" : ""}" data-round="${r}">${r}</button>`).join("");
    const on = L.view === "play" || L.view === "ceremony";
    for (const id of ["h-round", "h-ammo", "h-time", "h-lesson"]) $(id).classList.toggle("hidden", !on);
  }
  function applyDir() { const loc = (ui.locales || []).find((x) => x.code === L.locale) || {}; document.documentElement.lang = L.locale; document.documentElement.dir = loc.rtl ? "rtl" : "ltr"; }
  const boardHtml = () => { const b = board.slice().sort((a, b) => a.total_ms - b.total_ms).slice(0, 5); return b.length ? `<ol class="board">${b.map((e) => `<li><span>${esc(e.name)}</span><b>${R.formatMs(e.total_ms)}</b></li>`).join("")}</ol>` : ""; };

  function startScreen() {
    L.view = "start"; applyDir(); show("start", true); show("end", false);
    const chips = (list, on, attr) => list.map((x) => `<button type="button" class="chip${x.on ? " on" : ""}" data-${attr}="${esc(x.v)}">${esc(x.label)}</button>`).join("");
    $("start").innerHTML = `<div class="badge">🎪</div><p class="kicker">MRJ ENGLISH · v${R.VERSION}</p><h1>Memory Game</h1><p class="sub">${esc(pack.title || "")}</p>
      <p class="lead">${esc(S("how"))}</p>
      ${L.embedded ? "" : `<p class="lab">${esc(S("pack"))}</p><div class="chips" id="packs">${chips((packs || []).map((p) => ({ v: p.file, label: p.title || p.file, on: p.file === packFile })), 0, "pack")}</div>
      <label class="lab">Name <input id="name" type="text" maxlength="24" autocomplete="nickname" value="${esc(L.playerName)}"/></label>
      <div class="chips"><button type="button" class="chip${canSkip() ? " on" : ""}" id="teacher">Teacher</button>${L.playMode === "maker" ? `<span class="hint">Maker: skip heats and rounds while you test.</span>` : ""}</div>
      <p class="lab">${esc(S("language"))}</p><div class="chips" id="langs">${chips((ui.locales || []).map((x) => ({ v: x.code, label: x.label, on: x.code === L.locale })), 0, "code")}</div>`}
      ${boardHtml() ? `<p class="lab">${esc(S("leaderboard"))}</p>${boardHtml()}` : ""}
      <button class="go" id="play" type="button">${esc(S("play"))}</button>`;
    const q = (s) => $("start").querySelector(s);
    q("#play").addEventListener("click", play);
    q("#name")?.addEventListener("change", (e) => { L.playerName = e.target.value.trim() || "Player"; });
    q("#teacher")?.addEventListener("click", () => { L.teacherSkip = !L.teacherSkip; startScreen(); });
    q("#langs")?.addEventListener("click", (e) => { const b = e.target.closest("[data-code]"); if (b) { L.locale = b.dataset.code; startScreen(); preview(); } });
    q("#packs")?.addEventListener("click", (e) => { const b = e.target.closest("[data-pack]"); if (!b || b.dataset.pack === packFile) return; const u = new URL(location.href); u.searchParams.set("pack", b.dataset.pack); location.assign(u.toString()); });
    hudRefresh();
  }
  function preview() { try { const h = R.dealHeats(pack); L.round = 1; L.cards = R.dealCards(h.heatA, R.roundDef(1), L.locale, pack); scene.setCards(L.cards, true); } catch (e) { /* empty pack */ } }

  function emit(rec) {
    const a = { student_id: studentId, session_id: L.sessionId, module_id: R.MODULE_ID, activity_id: R.ACTIVITY_ID, item_id: "", skill_tags: [], response: "", correct: false, latency_ms: 0, accuracy: 0, points: 0, errors: 0,
      started_at: new Date().toISOString(), ended_at: new Date().toISOString(), ui_locale: L.locale, round_index: 0, total_ms: 0, ...rec };
    records.push(a);
    window.dispatchEvent(new CustomEvent("mrj-memory-match-record", { detail: a }));
    return a;
  }
  function play() {
    const nm = $("start").querySelector("#name"); if (nm) L.playerName = nm.value.trim() || "Player";
    audio.unlock(); audio.startMusic(); audio.play("click");
    const pre = ["prize/applause", ...R.BOOTHS.flatMap((b) => [`carnies/${b.carny}-round`, `carnies/${b.carny}-hit-1`, `carnies/${b.carny}-miss-1`])];
    for (const it of pack.items || []) if (it.audio_id) pre.push(it.audio_id);
    audio.preload(pre.map(R.audioUrl).filter(Boolean));
    Object.assign(L, { sessionId: uid("session"), completedMs: [], usedSkip: false, flyingUid: null, queuedUid: null, streak: 0, bestStreak: 0, misses: 0 });
    show("start", false); show("end", false); applyDir();
    startRound(1);
  }
  function startRound(r) {
    Object.assign(L, { view: "play", round: r, heat: 0, heats: R.dealHeats(pack), roundStartedAt: performance.now() });
    scene.setTheme(R.roundDef(r));
    carnyLine("round");
    const d = R.roundDef(r);
    banner(`<small>${S("round")} ${r}/${R.ROUNDS}</small><b>${esc(d.label)}</b><span>${esc(S(R.lessonKey(r)))}</span>`);
    startHeat();
  }
  function banner(html) { const b = $("banner"); b.innerHTML = html; b.classList.remove("hidden", "on"); void b.offsetWidth; b.classList.add("on"); clearTimeout(banner.t); banner.t = setTimeout(() => b.classList.add("hidden"), 1900); }
  function startHeat() {
    const items = L.heat === 0 ? L.heats.heatA : L.heats.heatB;
    Object.assign(L, { cards: R.dealCards(items, R.roundDef(L.round), L.locale, pack), open: [], flyingUid: null, queuedUid: null, locked: false, matched: 0 });
    scene.setCards(L.cards, false);
    audio.play("whoosh", { vol: 0.6 });
    hudRefresh();
  }
  const card = (u) => L.cards.find((c) => c.uid === u);
  const openCount = () => L.open.length + (L.flyingUid ? 1 : 0) + (L.queuedUid ? 1 : 0);
  function tap(u) {
    if (L.view !== "play") return;
    const c = card(u); if (!c || c.matched) return;
    if (c.down) { if (c.face === "audio") sayWord(c); return; }
    if (L.open.find((z) => z.uid === u) || L.flyingUid === u || L.queuedUid === u) return;
    if (L.locked) { if (openCount() === 1 && !L.queuedUid) L.queuedUid = u; return; }
    if (L.open.length >= 1 && openCount() >= 2) return;
    fire(u);
  }
  function fire(u) {
    const c = card(u); if (!c || c.down || L.open.find((z) => z.uid === u)) return;
    L.locked = true; L.flyingUid = u;
    if (L.open.length === 0) L.pairStartedAt = performance.now();
    const ammo = R.roundDef(L.round).ammo;
    audio.play(ammo === "gun" ? "laser" : "whoosh", { vol: 0.6, rate: ammo === "water" ? 1.4 : 1 });
    try { navigator.vibrate && navigator.vibrate(12); } catch (e) { /* no haptics */ }
    scene.throwAt(u, ammo, () => {
      L.flyingUid = null;
      audio.play(ammo === "water" ? "splash" : ammo === "beanbags" ? "thud" : "pop", { vol: 0.7 });
      audio.play("flip", { vol: 0.6, delay: 0.05 });
      c.down = true; scene.flip(u, true);
      if (c.face === "audio") sayWord(c);
      L.open.push(c);
      if (L.open.length < 2) { L.locked = false; const v = L.queuedUid; L.queuedUid = null; if (v && L.view === "play") fire(v); return; }
      L.queuedUid = null;
      const [a, b] = L.open, ok = R.isPair(a, b), now = performance.now();
      emit({ item_id: ok ? a.itemId : `${a.itemId},${b.itemId}`, skill_tags: [...new Set([...(a.skill_tags || []), ...(b.skill_tags || [])])], response: `${a.uid}|${b.uid}`, correct: ok,
        latency_ms: Math.max(0, Math.round(now - L.pairStartedAt)), accuracy: ok ? 1 : 0, points: 0, errors: ok ? 0 : 1,
        started_at: new Date(Date.now() - (now - L.pairStartedAt)).toISOString(), ended_at: new Date().toISOString(), ui_locale: L.locale, round_index: L.round, total_ms: Math.round(totalMs(now)) });
      if (ok) {
        L.streak++; L.bestStreak = Math.max(L.bestStreak, L.streak);
        audio.play("sparkle"); audio.combo(L.streak); carnyLine("hit");
        scene.matched([a.uid, b.uid], L.streak);
        a.matched = b.matched = true;
        L.matched++; L.open = []; L.locked = false;
        combo();
        if (L.matched >= Math.floor(L.cards.length / 2)) setTimeout(heatDone, 450);
      } else {
        L.streak = 0; L.misses++; combo();
        audio.play("buzz", { vol: 0.5 }); carnyLine("miss");
        scene.miss([a.uid, b.uid]);
        const ep = scene.epoch();
        setTimeout(() => { if (scene.epoch() !== ep) return; audio.play("pop", { vol: 0.4 }); a.down = b.down = false; scene.flip(a.uid, false); scene.flip(b.uid, false); L.open = []; L.locked = false; }, R.MISS_RETURN_MS);
      }
    });
  }
  function combo() { const c = $("h-combo"); if (L.streak >= 2) { c.textContent = `🔥 ${L.streak} in a row!`; c.classList.remove("on"); void c.offsetWidth; c.classList.add("on"); } else c.classList.remove("on"); }
  function heatDone() {
    if (L.heat + 1 < (L.heats.heatCount || 1)) { L.heat++; return startHeat(); }
    L.completedMs.push(performance.now() - L.roundStartedAt);
    ceremony();
  }
  async function ceremony() {
    if (L.finishing) return;
    L.finishing = true; L.view = "ceremony"; L.locked = true;
    const d = R.roundDef(L.round), last = L.round >= R.ROUNDS;
    audio.clip(R.audioUrl("prize/applause"), { vol: last ? 1 : 0.88 });
    audio.clip(R.audioUrl(`prize/${d.carny}-prize`), { vol: 1 });
    audio.play("fanfare");
    scene.prize(last);
    await new Promise((r) => setTimeout(r, last ? 2600 : 2000));
    const f = $("fade"); f.classList.add("on"); await new Promise((r) => setTimeout(r, 380));
    if (last) end(); else startRound(L.round + 1);
    f.classList.remove("on"); L.finishing = false;
  }
  function end() {
    L.view = "end"; L.locked = true;
    const A = L.completedMs.reduce((a, b) => a + b, 0);
    if (!canSkip() && !L.usedSkip) board.push({ module_id: R.MODULE_ID, name: L.playerName || "Player", total_ms: Math.round(A), rounds: R.ROUNDS, at: new Date().toISOString() });
    emit({ item_id: "session", skill_tags: pack.skill_tags || [], response: "win", correct: true, latency_ms: Math.round(A), accuracy: 1, points: 0, errors: 0, started_at: new Date(Date.now() - A).toISOString(), ended_at: new Date().toISOString(), ui_locale: L.locale, round_index: R.ROUNDS, total_ms: Math.round(A) });
    if (L.embedded && !L.usedSkip) {
      const n = Array.isArray(pack.items) ? pack.items.length : 0;
      try { if (window.parent && window.parent !== window) window.parent.postMessage({ type: "mrj-wm-game-done", game: "memorymatch", items: n, correct: n, finished: true }, "*"); } catch (e) { /* closed frame */ }
    }
    fx.confetti(stage.w / 2, stage.h * 0.35, 140);
    $("end").innerHTML = `<div class="badge">🏆</div><p class="kicker">MRJ ENGLISH</p><h1>Memory Game</h1><p class="sub">${esc(S("total"))}</p><p class="time">${R.formatMs(A)}</p>
      <div class="stats"><div><b>${R.ROUNDS}</b><span>rounds</span></div><div><b>${L.bestStreak}</b><span>best streak</span></div><div><b>${L.misses}</b><span>misses</span></div></div>
      ${boardHtml() ? `<p class="lab">${esc(S("leaderboard"))}</p>${boardHtml()}` : ""}<button class="go" id="again" type="button">${esc(S("again"))}</button>`;
    show("end", true); hudRefresh();
    $("end").querySelector("#again").addEventListener("click", () => { audio.play("click"); startScreen(); preview(); });
  }

  // ---------- input ----------
  $("skip-heat").addEventListener("click", () => { if (!canSkip() || L.view !== "play") return; L.usedSkip = true; heatDone(); });
  $("skip-round").addEventListener("click", () => { if (!canSkip() || L.view !== "play") return; L.usedSkip = true; L.completedMs.push(Math.max(0, performance.now() - (L.roundStartedAt || performance.now()))); ceremony(); });
  $("skip-rounds").addEventListener("click", (e) => { if (!canSkip() || L.view !== "play") return; const b = e.target.closest("[data-round]"); if (!b) return; L.usedSkip = true; startRound(Number(b.dataset.round)); });
  let kbIndex = 0;
  createInput(host, {
    keys: { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", Enter: "go", " ": "go" },
    onKey(a) {
      audio.unlock();
      if (a === "go" && L.view === "start") return play();
      if (L.view !== "play") return;
      const live = L.cards.filter((c) => !c.matched);
      if (!live.length) return;
      if (a === "go") return tap((live[kbIndex % live.length] || live[0]).uid);
      kbIndex = (kbIndex + (a === "left" || a === "up" ? -1 : 1) + live.length) % live.length;
      scene.focus(live[kbIndex].uid);
    },
    onTap(x, y) { audio.unlock(); const u = scene.pick(x, y); if (u) tap(u); },
  });

  stage.run((dt) => {
    L.t += dt;
    if (L.view === "play") $("h-time").textContent = R.formatMs(totalMs());
    fx.update(dt);
    scene.draw(dt);
  });
  window.MRJMemoryMatch = {
    version: R.VERSION, module_id: R.MODULE_ID, activity_id: R.ACTIVITY_ID, pack, ui,
    engine: { roundDef: R.roundDef, dealHeat: R.dealCards, isComplementaryPair: R.isPair, formatMs: R.formatMs },
    getState: () => ({ view: L.view, round: L.round, heat: L.heat, matched: L.matched, locked: L.locked, embedded: L.embedded, records: records.length, usedSkip: L.usedSkip, streak: L.streak, low: scene.low, quality: scene.quality, fps: Math.round(scene.stage3.fps), total_ms: Math.round(totalMs()),
      cards: L.cards.map((c) => ({ uid: c.uid, itemId: c.itemId, role: c.role, face: c.face, down: c.down, matched: !!c.matched, ...scene.center(c.uid) })) }),
    tap,
  };
  startScreen(); preview();
  const qs = new URLSearchParams(location.search);
  if (qs.get("autostart") === "1") { play(); const r = Number(qs.get("round") || 1); if (r >= 2 && r <= R.ROUNDS) startRound(r); }
}
