// Memory Game rules — kept exactly as v4.2.0 (6 rounds, heats of 5 pairs, complementary pairs).
// Pure: runs in node tests and any webview.
export const VERSION = "5.1.0";
export const MODULE_ID = "memory-match";
export const ACTIVITY_ID = "memory-game";
export const ROUNDS = 6;
export const MISS_RETURN_MS = 780;
export const SESSION_KEY = "mrj.wm.gamepack";
export const ROUND_PAIRS = [
  { index: 1, a: "picture", b: "audio" }, { index: 2, a: "picture", b: "word" }, { index: 3, a: "audio", b: "word" },
  { index: 4, a: "audio", b: "meaning" }, { index: 5, a: "meaning", b: "word" }, { index: 6, a: "meaning", b: "audio" },
];
export const BOOTHS = [
  { index: 1, ammo: "beanbags", carny: "ray", label: "Bean bags", carnyName: "Coach Ray", theme: "fair" },
  { index: 2, ammo: "water", carny: "nia", label: "Water gun", carnyName: "Nia", theme: "boardwalk" },
  { index: 3, ammo: "bow", carny: "walt", label: "Longbow", carnyName: "Grandpa Walt", theme: "field" },
  { index: 4, ammo: "gun", carny: "cowboy", label: "Gallery gun", carnyName: "Cowboy Dusty", theme: "western" },
  { index: 5, ammo: "axe", carny: "june", label: "Spinning axe", carnyName: "Grandma June", theme: "forest" },
  { index: 6, ammo: "parrot", carny: "pirate", label: "Parrot toss", carnyName: "Captain Pop", theme: "seaside" },
];
export const ANIMAL_PICS = Object.fromEntries(["cat", "dog", "bird", "fish", "horse", "cow", "pig", "duck", "frog", "bear"].map((a) => [a, `./pics/${a}.webp`]));
export const LOCALE_ALIAS = { "zh-Hans": "zh", "pt-BR": "pt" };

export function roundDef(r) {
  const p = ROUND_PAIRS[r - 1];
  if (!p) throw new Error(`Round ${r} out of range (1–${ROUNDS})`);
  return { ...p, ...(BOOTHS[r - 1] || BOOTHS[0]) };
}
export const lessonKey = (r) => { const d = roundDef(r); return `lesson_${d.a}_${d.b}`; };

export function shuffle(a, rnd = Math.random) { const t = a.slice(); for (let n = t.length - 1; n > 0; n--) { const r = Math.floor(rnd() * (n + 1)); [t[n], t[r]] = [t[r], t[n]]; } return t; }

// Session media: keep http(s), ./, /, data:, blob:; resolve the rest against the page.
export function mmResolveMedia(i, base = typeof location !== "undefined" ? location.href : "https://x/") {
  const e = String(i || "").trim();
  if (!e) return "";
  if (/^https?:\/\//i.test(e) || e.startsWith("./") || e.startsWith("/") || e.startsWith("data:") || e.startsWith("blob:")) return e;
  try { return new URL(e, base).href; } catch (err) { return e; }
}
// audio_id -> url ("en-cat" -> ./audio/en-cat.mp3)
export function audioUrl(i) {
  if (i == null) return null;
  const e = String(i).trim();
  if (!e || e.toLowerCase() === "null") return null;
  if (/^(https?:)?\/\//i.test(e) || e.startsWith("data:") || e.startsWith("blob:") || e.startsWith("./") || e.startsWith("/")) return e;
  return /\.[a-z0-9]{2,4}$/i.test(e) ? `./audio/${e}` : `./audio/${e}.mp3`;
}
export function validatePack(p) {
  if (!p || typeof p !== "object") throw new Error("Invalid pack");
  if (!Array.isArray(p.items) || p.items.length === 0) throw new Error("Invalid pack: items[] required");
  for (const e of p.items) { if (!e || !e.id) throw new Error("Invalid pack item: id required"); if (!e.en) throw new Error(`Invalid pack item ${e.id}: en required`); }
  return true;
}
export function parseSessionPack(raw, base) {
  if (raw == null || String(raw).trim() === "") throw new Error("Session pack is empty");
  let e; try { e = typeof raw === "string" ? JSON.parse(raw) : raw; } catch (err) { throw new Error("Session pack is empty"); }
  if (!e || typeof e !== "object" || Array.isArray(e)) throw new Error("Session pack is empty");
  const items = [];
  for (const s of Array.isArray(e.items) ? e.items : []) {
    if (!s || typeof s !== "object") continue;
    const en = String(s.en || "").trim(); if (!en) continue;
    const id = String(s.id || en).trim(); if (!id) continue;
    const u = { id, en, l1: s.l1 && typeof s.l1 === "object" && !Array.isArray(s.l1) ? s.l1 : {}, from_session: true };
    const a = String(s.audio_id || "").trim(); if (a) u.audio_id = mmResolveMedia(a, base);
    const p = String(s.picture || "").trim(); if (p) u.picture = mmResolveMedia(p, base);
    items.push(u);
  }
  const pack = { pack_id: e.pack_id || "session", title: e.title || "Memory Game", module_id: e.module_id || MODULE_ID, activity_id: ACTIVITY_ID, ui_locale: e.ui_locale || "", items };
  validatePack(pack);
  return pack;
}
// up to 10 items per round: one heat (<=5) or two heats of 5
export function dealHeats(pack, rnd = Math.random) {
  const n = shuffle(pack.items || [], rnd);
  if (n.length < 1) throw new Error("Pack needs at least 1 item");
  const r = n.length >= 10 ? n.slice(0, 10) : n.slice();
  return r.length <= 5 ? { heatA: r, heatB: [], heatPairs: r.length, heatCount: 1 } : { heatA: r.slice(0, 5), heatB: r.slice(5, 10), heatPairs: 5, heatCount: 2 };
}
const numText = (i) => (i && i.n != null && i.n !== "" ? String(i.n) : "");
export const l1Text = (i, loc) => { const t = (i && i.l1) || {}; return loc && t[loc] ? String(t[loc]) : ""; };
export function cardFace(item, role, locale) {
  const n = item && item.n != null ? Number(item.n) : 0, audioId = (item && item.audio_id) || "", animal = (item && (item.animal || item.id)) || "";
  if (role === "meaning") {
    if (locale && locale !== "en") { const t = l1Text(item, locale); if (t) return { kind: "l1", text: t, n, audioId, animal }; }
    return { kind: "digit", text: numText(item), n, audioId, animal };
  }
  if (role === "word") return { kind: "word", text: item.en ? String(item.en) : "", n, audioId, animal };
  if (role === "audio") return { kind: "audio", text: "", n, audioId, animal };
  if (role === "picture") return { kind: "picture", text: "", n, audioId, animal, fromSession: !!(item && item.from_session) };
  return { kind: role || "word", text: "", n, audioId };
}
export function dealCards(items, def, locale, pack, rnd = Math.random) {
  const out = [];
  for (const a of items) for (const role of [def.a, def.b]) {
    const c = cardFace(a, role, locale);
    out.push({ uid: `${a.id}::${role}::${c.kind}`, itemId: a.id, itemEn: String(a.en || ""), role, face: c.kind, text: c.text, n: c.n, audioId: c.audioId,
      animal: c.animal || a.animal || a.id, picture: a && a.picture ? mmResolveMedia(String(a.picture).trim()) : "", fromSession: !!(a && a.from_session),
      l1: l1Text(a, locale), skill_tags: [...((pack && pack.skill_tags) || []), ...((a && a.skill_tags) || [])], down: false });
  }
  return shuffle(out, rnd).map((c, slot) => ({ ...c, slot }));
}
export const isPair = (a, b) => !(!a || !b || a.uid === b.uid || a.itemId !== b.itemId) && a.role !== b.role;
export function formatMs(i) {
  const e = Math.max(0, Math.floor(Number(i) || 0));
  return `${Math.floor(e / 6e4)}:${String(Math.floor((e % 6e4) / 1e3)).padStart(2, "0")}.${String(Math.floor((e % 1e3) / 10)).padStart(2, "0")}`;
}
export function uiString(ui, locale, key) {
  const s = (ui && ui.strings) || {}, r = LOCALE_ALIAS[locale] || locale, t = (r && s[r]) || {};
  return t[key] != null ? String(t[key]) : s.en && s.en[key] != null ? String(s.en[key]) : key;
}
