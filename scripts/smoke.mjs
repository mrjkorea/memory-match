// Headless smoke: real Chromium, zz_test ids only. Memory Game posts no scores (any script.google.com request fails the run).
// node scripts/smoke.mjs [outDir] [wmGameDir]
import { chromium } from "playwright";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const out = path.resolve(process.argv[2] || "/workspace/memory-match-shots");
const wmDir = process.argv[3] ? path.resolve(process.argv[3]) : null;
fs.mkdirSync(out, { recursive: true });
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".mp3": "audio/mpeg", ".woff2": "font/woff2", ".woff": "font/woff", ".webp": "image/webp", ".jpg": "image/jpeg", ".png": "image/png", ".glb": "model/gltf-binary" };
const serve = (dir, extra = {}) => new Promise((res) => { const s = http.createServer((req, rsp) => {
  const u = decodeURIComponent(req.url.split("?")[0]);
  if (extra[u]) { rsp.writeHead(200, { "content-type": "text/html; charset=utf-8" }); return rsp.end(extra[u]); }
  const f = path.join(dir, u.endsWith("/") ? u + "index.html" : u);
  if (!f.startsWith(dir) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { rsp.writeHead(404); return rsp.end("nf"); }
  rsp.writeHead(200, { "content-type": TYPES[path.extname(f)] || "application/octet-stream" }); fs.createReadStream(f).pipe(rsp); }).listen(0, () => res(s)); });
const fails = []; const check = (ok, m) => { console.log((ok ? "PASS " : "FAIL ") + m); if (!ok) fails.push(m); };
// pilot: tap a known pair every 520 ms (test only)
const PILOT = () => { clearInterval(window.__p); window.__p = setInterval(() => { const A = window.MRJMemoryMatch, s = A.getState(); if (s.view !== "play" || s.locked) return;
  const open = s.cards.find((c) => c.down && !c.matched); const live = s.cards.filter((c) => !c.down && !c.matched);
  if (open) { const m = live.find((c) => c.itemId === open.itemId); if (m) A.tap(m.uid); } else if (live[0]) A.tap(live[0].uid); }, 520); };
async function newPage(browser, opts, bad) {
  const ctx = await browser.newContext(opts);
  await ctx.route("https://script.google.com/**", (r) => { bad.push(r.request().url()); r.abort(); });
  await ctx.route("https://fonts.googleapis.com/**", (r) => r.fulfill({ contentType: "text/css", body: "" }));
  const page = await ctx.newPage();
  page.on("pageerror", (e) => fails.push("pageerror: " + e.message));
  return { ctx, page };
}
const st = (p) => p.evaluate(() => window.MRJMemoryMatch.getState());
const W = (p, fn, t = 30000) => p.waitForFunction(fn, null, { timeout: t });
const browser = await chromium.launch({ args: ["--autoplay-policy=no-user-gesture-required", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const server = await serve(root); const B = `http://localhost:${server.address().port}`;
try {
  const bad = [];
  const { ctx, page } = await newPage(browser, { viewport: { width: 1280, height: 800 } }, bad);
  await page.goto(`${B}/index.html?student=zz_test_memory`);
  await page.waitForSelector("#play", { timeout: 60000 }); await page.waitForTimeout(900);
  await page.screenshot({ path: `${out}/01-start-desktop.png` });
  await page.click("#play");
  await page.waitForTimeout(2300); await page.screenshot({ path: `${out}/02-round1-booth.png` });
  let s = await st(page);
  check(await page.evaluate(() => !!document.querySelector("canvas.stage3d")), "3D WebGL stage present");
  check(s.view === "play" && s.round === 1 && s.cards.length === 10 && s.cards.every((c) => c.role === "picture" || c.role === "audio"), "round 1: 10 cards, picture + audio");
  // a miss: two cards of different items (real mouse clicks)
  const a = s.cards[0], b = s.cards.find((c) => c.itemId !== a.itemId);
  await page.mouse.click(a.x, a.y); await page.waitForTimeout(700); await page.mouse.click(b.x, b.y); await page.waitForTimeout(550);
  await page.screenshot({ path: `${out}/03-miss.png` });
  await page.waitForTimeout(900); s = await st(page);
  check(s.cards.every((c) => !c.down) && s.records === 1, "miss flips both back, 1 record");
  const m = s.cards.find((c) => c.itemId === a.itemId && c.uid !== a.uid);
  await page.mouse.click(a.x, a.y); await page.waitForTimeout(700); await page.mouse.click(m.x, m.y); await page.waitForTimeout(500);
  await page.screenshot({ path: `${out}/04-match.png` });
  s = await st(page); check(s.matched === 1, "match counts");
  await page.evaluate(PILOT);
  await W(page, () => window.MRJMemoryMatch.getState().round === 2 && window.MRJMemoryMatch.getState().view === "play", 90000);
  await page.waitForTimeout(2500); await page.screenshot({ path: `${out}/05-round2-picture-word.png` });
  await W(page, () => window.MRJMemoryMatch.getState().view === "ceremony", 90000);
  await page.waitForTimeout(900); await page.screenshot({ path: `${out}/06-prize.png` });
  await W(page, () => window.MRJMemoryMatch.getState().round === 4 && window.MRJMemoryMatch.getState().view === "play", 120000);
  await page.waitForTimeout(2600); await page.screenshot({ path: `${out}/07-round4-water-gun.png` });
  await W(page, () => window.MRJMemoryMatch.getState().view === "end", 240000);
  await page.waitForTimeout(1000); await page.screenshot({ path: `${out}/08-end.png` });
  s = await st(page);
  check(s.records === 6 * 10 + 1 + 1, `records: 60 match + 1 miss + session (${s.records})`);
  check((await page.evaluate(() => Object.keys(localStorage))).length === 0, "nothing saved to localStorage");
  check(bad.length === 0, "no score / network posts");
  await ctx.close();

  if (wmDir) {
    const items = [["cat", "고양이"], ["dog", "개"], ["bird", "새"]].map(([en, ko]) => ({ id: "zz-" + en, en, l1: { ko }, audio_id: `audio/en-${en}.mp3`, picture: `pics/${en}.webp` }));
    const pack = { pack_id: "zz_test_pack", title: "zz test", module_id: "memory-match", ui_locale: "ko", items };
    const ws = await serve(wmDir, { "/host.html": `<!doctype html><body style="margin:0"><iframe id=f style="width:1000px;height:700px;border:0"></iframe><script>
      window.msgs=[];addEventListener("message",e=>msgs.push(e.data));sessionStorage.setItem("mrj.wm.gamepack",${JSON.stringify(JSON.stringify(pack))});
      document.getElementById("f").src="index.html?pack=session&packid=zz_test_pack&words=&voice=us_m&v=1.11&student=zz_test_wm&locale=ko";</script>` });
    const wp = await newPage(browser, { viewport: { width: 1000, height: 700 } }, bad);
    await wp.page.goto(`http://localhost:${ws.address().port}/host.html`);
    const f = await (await wp.page.waitForSelector("#f")).contentFrame();
    await f.waitForSelector("#play", { timeout: 60000 });
    check(await f.evaluate(() => !document.querySelector("#packs, #langs, #name, #teacher, #skipbar:not(.hidden)")), "WM: no sets / language / name / teacher skip");
    await f.click("#play");
    await f.evaluate(PILOT);
    await W(f, () => window.MRJMemoryMatch.getState().round === 5 && window.MRJMemoryMatch.getState().view === "play", 120000);
    await f.evaluate(() => clearInterval(window.__p));
    const s5 = await f.evaluate(() => window.MRJMemoryMatch.getState()); const c5 = s5.cards[0];
    await f.evaluate((u) => window.MRJMemoryMatch.tap(u), c5.uid); await f.evaluate((id) => { const s = window.MRJMemoryMatch.getState(); setTimeout(() => window.MRJMemoryMatch.tap(s.cards.find((c) => c.itemId !== id).uid), 700); }, c5.itemId);
    await f.waitForTimeout(1100); await wp.page.screenshot({ path: `${out}/09-wordmaster-korean.png` });
    await f.waitForTimeout(800); await f.evaluate(PILOT);
    await W(f, () => window.MRJMemoryMatch.getState().view === "end", 120000);
    await f.waitForTimeout(800); await wp.page.screenshot({ path: `${out}/10-wordmaster-end.png` });
    const msgs = await wp.page.evaluate(() => window.msgs), done = msgs.filter((x) => x && x.type === "mrj-wm-game-done");
    check(done.length === 1 && done[0].game === "memorymatch" && done[0].items === 3 && done[0].correct === 3 && done[0].finished === true, "WM: one mrj-wm-game-done " + JSON.stringify(done));
    check((await f.evaluate(() => Object.keys(localStorage))).length === 0, "WM: nothing in localStorage");
    await wp.ctx.close(); ws.close();
  }
} catch (err) { fails.push("exception: " + err.message); console.log(err); }
await browser.close(); server.close();
console.log(fails.length ? `SMOKE FAIL (${fails.length})\n` + fails.join("\n") : "SMOKE OK"); process.exit(fails.length ? 1 : 0);
