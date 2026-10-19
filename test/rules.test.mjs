import assert from "node:assert/strict";
import { describe, it } from "node:test";
import fs from "node:fs";
import * as R from "../app/src/rules.js";
const animals = JSON.parse(fs.readFileSync(new URL("../packs/animals-1-10.json", import.meta.url)));
describe("memory rules (unchanged from 4.2.0)", () => {
  it("6 rounds, pair types and booths", () => {
    assert.equal(R.ROUNDS, 6);
    assert.deepEqual([1, 2, 3, 4, 5, 6].map((r) => R.lessonKey(r)), ["lesson_picture_audio", "lesson_picture_word", "lesson_audio_word", "lesson_audio_meaning", "lesson_meaning_word", "lesson_meaning_audio"]);
    assert.equal(R.roundDef(4).ammo, "gun");
    assert.throws(() => R.roundDef(7));
  });
  it("heats: 10 items -> 2 x 5, 3 items -> 1 heat, 14 items -> first 10", () => {
    assert.equal(R.dealHeats(animals).heatCount, 2);
    assert.equal(R.dealHeats({ items: animals.items.slice(0, 3) }).heatPairs, 3);
    const h = R.dealHeats({ items: [...animals.items, ...animals.items.slice(0, 4).map((x) => ({ ...x, id: x.id + "2" }))] });
    assert.equal(h.heatA.length + h.heatB.length, 10);
  });
  it("cards: two per item, complementary pairs", () => {
    const cards = R.dealCards(animals.items.slice(0, 5), R.roundDef(4), "ko", animals);
    assert.equal(cards.length, 10);
    const cat = cards.filter((c) => c.itemId === "cat");
    assert.deepEqual(cat.map((c) => c.role).sort(), ["audio", "meaning"]);
    assert.equal(cat.find((c) => c.role === "meaning").text, "고양이");
    assert.ok(R.isPair(cat[0], cat[1]));
    assert.ok(!R.isPair(cat[0], cat[0]));
    assert.ok(!R.isPair(cat[0], cards.find((c) => c.itemId !== "cat")));
  });
  it("session pack keeps relative media (resolved), drops empty words", () => {
    const p = R.parseSessionPack(JSON.stringify({ pack_id: "zz_test", items: [{ id: "area", en: "area", l1: { ko: "지역" }, audio_id: "packs/toeic01/audio/us_m/area.mp3", picture: "https://x/p.jpg" }, { en: "" }] }), "https://mrjkorea.github.io/word-master/games/memory-match/");
    assert.equal(p.items.length, 1);
    assert.equal(p.items[0].audio_id, "https://mrjkorea.github.io/word-master/games/memory-match/packs/toeic01/audio/us_m/area.mp3");
    assert.throws(() => R.parseSessionPack(""), /empty/);
  });
  it("audio ids and time format", () => {
    assert.equal(R.audioUrl("en-cat"), "./audio/en-cat.mp3");
    assert.equal(R.audioUrl("carnies/ray-round"), "./audio/carnies/ray-round.mp3");
    assert.equal(R.audioUrl("https://a/b.mp3"), "https://a/b.mp3");
    assert.equal(R.formatMs(83456), "1:23.45");
  });
});
