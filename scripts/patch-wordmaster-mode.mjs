#!/usr/bin/env node
/**
 * Patches memory-match bundle for Word Master (pack=session) mode.
 * Source base: word-master vendored games/memory-match bundle (session pack support).
 */
import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const src = process.argv[2];
const dest = path.join(root, "assets", "index-CjSx5yu_.js");

let b = fs.readFileSync(src, "utf8");

const oldMg =
  'function mg(i=typeof location<"u"?location.search:""){const e=new URLSearchParams(i||"");return e.get("embed")==="1"||e.get("student")==="1"}';
const newMg =
  'function mg(i=typeof location<"u"?location.search:""){const e=new URLSearchParams(i||"");if((e.get("pack")||"").trim()==="session")return!0;if(e.get("embed")==="1")return!0;return!1}';

if (!b.includes(oldMg)) {
  console.error("mg() patch: expected snippet not found");
  process.exit(1);
}
b = b.replace(oldMg, newMg);

const oldMaker =
  'const U=l.playMode==="maker"?`<div class="mode-row">\n          <button type="button" class="mode-btn" id="mode-student">Student</button>\n          <button type="button" class="mode-btn on" id="mode-maker">Maker</button>\n        </div>\n        <p class="hint">Maker: skip heats and rounds while you test.</p>`:""';
const newMaker =
  'const U=!l.embedded&&l.playMode==="maker"?`<div class="mode-row">\n          <button type="button" class="mode-btn" id="mode-student">Student</button>\n          <button type="button" class="mode-btn on" id="mode-maker">Maker</button>\n        </div>\n        <p class="hint">Maker: skip heats and rounds while you test.</p>`:""';

if (!b.includes(oldMaker)) {
  console.error("maker UI patch: expected snippet not found");
  process.exit(1);
}
b = b.replace(oldMaker, newMaker);

const oldPack =
  '<p class="lang-label">${ut(S("pack"))}</p>\n          <div class="lang-grid" id="pack-grid">${R()}</div>';
const newPack =
  '${l.embedded?"":`<p class="lang-label">${ut(S("pack"))}</p>\n          <div class="lang-grid" id="pack-grid">${R()}</div>`}';

if (!b.includes(oldPack)) {
  console.error("pack grid patch: expected snippet not found");
  process.exit(1);
}
b = b.replace(oldPack, newPack);

const oldName =
  '<div class="row solo">\n            <label>Name\n              <input id="name" type="text" maxlength="24" autocomplete="nickname" value="${ut(l.playerName)}" />\n            </label>\n          </div>';
const newName =
  '${l.embedded?"":`<div class="row solo">\n            <label>Name\n              <input id="name" type="text" maxlength="24" autocomplete="nickname" value="${ut(l.playerName)}" />\n            </label>\n          </div>`}';

if (!b.includes(oldName)) {
  console.error("name row patch: expected snippet not found");
  process.exit(1);
}
b = b.replace(oldName, newName);

const oldBootstrap =
  "let m=Dg(\"Player\"),_=Ig(),g=Pg(!0);";
const newBootstrap =
  'let m=h?(()=>{try{const A=decodeURIComponent(Sg()||"").trim();return A&&A!=="local-student"?A:Dg("Player")}catch{return Dg("Player")}})():Dg("Player"),_=h?"student":Ig(),g=h?!1:Pg(!0);';

if (!b.includes(oldBootstrap)) {
  console.error("bootstrap patch: expected snippet not found");
  process.exit(1);
}
b = b.replace(oldBootstrap, newBootstrap);

const oldNameListener =
  'f.querySelector("#name").addEventListener("change",ie=>{l.playerName=ie.target.value.trim()||"Player",fc(l.playerName)});';
const newNameListener =
  'f.querySelector("#name")?.addEventListener("change",ie=>{l.playerName=ie.target.value.trim()||"Player",fc(l.playerName)});';

if (!b.includes(oldNameListener)) {
  console.error("name listener patch: expected snippet not found");
  process.exit(1);
}
b = b.replace(oldNameListener, newNameListener);

fs.writeFileSync(dest, b);
console.log("Wrote", dest, "(" + b.length + " bytes)");
