import "@fontsource/fredoka/latin-500.css";
import "@fontsource/fredoka/latin-700.css";
import "./kit/base.css";
import "./style.css";
import { startGame } from "./game.js";
import { parseSessionPack, validatePack, SESSION_KEY } from "./rules.js";
const app = document.getElementById("app");
const qs = new URLSearchParams(location.search);
// Word Master copy carries <meta name="mrj-host" content="word-master">; ?pack=session / ?embed=1 also mean embedded (as before).
const wm = !!document.querySelector('meta[name="mrj-host"][content="word-master"]');
const session = (qs.get("pack") || "").trim() === "session";
const embedded = wm || session || qs.get("embed") === "1";
const dflt = (document.querySelector('meta[name="mm-default-pack"]') || {}).content || "";
const getJson = async (u) => { const r = await fetch(u, { cache: "no-store" }); if (!r.ok) throw new Error(`Load failed (${r.status}): ${u}`); return r.json(); };
document.addEventListener("gesturestart", (e) => e.preventDefault());
async function boot() {
  let packFile = qs.get("pack") && !session ? qs.get("pack").trim() : dflt;
  let packP;
  if (wm || session) { let raw = null; try { raw = sessionStorage.getItem(SESSION_KEY); } catch (e) { raw = null; } packP = Promise.resolve(parseSessionPack(raw)); }
  else if (!packFile) throw new Error("No word pack.");
  else packP = getJson(packFile);
  const [pack, ui, idx] = await Promise.all([packP, getJson("./packs/ui-l1.json"), embedded ? Promise.resolve({ packs: [] }) : getJson("./packs/index.json").catch(() => ({ packs: [] }))]);
  validatePack(pack);
  let locale = "";
  for (const k of ["locale", "lang", "ui_locale"]) { const v = (qs.get(k) || "").trim(); if (v) { locale = v; break; } }
  if (!embedded && !locale) { locale = pack.default_ui_locale || "en"; if (!(ui.locales || []).some((l) => l.code === locale)) locale = "en"; }
  if (!locale) locale = "en";
  const studentRaw = qs.get("student") || qs.get("student_id") || "local-student";
  let name = "Player";
  if (embedded) { try { const s = decodeURIComponent(studentRaw).trim(); if (s && s !== "local-student") name = s; } catch (e) { /* keep Player */ } }
  const mode = !embedded && (qs.get("mode") || "").toLowerCase() === "maker" ? "maker" : "student";
  const q = qs.get("q");
  await startGame(app, { pack, ui, packs: idx.packs || [], packFile, embedded, wm, locale, playerName: name, playMode: mode, studentId: studentRaw, quality: q === "low" || q === "high" ? q : undefined });
}
boot().catch((err) => { console.error(err); app.innerHTML = `<div class="fatal"><h2>Memory Game failed to load</h2><p></p></div>`; app.querySelector(".fatal p").textContent = err.message || String(err); });
