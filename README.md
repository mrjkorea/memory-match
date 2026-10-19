# memory-match (Memory Game)

MRJ kid English game. Six carnival booth rounds. Tap two targets to flip them and match the pairs
(picture ↔ sound, picture ↔ word, sound ↔ word, sound ↔ meaning, meaning ↔ word, meaning ↔ sound). Your total time is your score.

## 3D v2 (v5.1.0)
The booth is real 3D again (three.js), like the original 4.x game: `app/src/scene3d.js` restores the first-person carnival booth with the same six themes (fair, boardwalk, field, western, forest, seaside), the same knock-down targets, carny and thrower hand/ammo, and makes it richer: a striped awning with glowing bulbs, bunting, a prize shelf, 3D card flips, particle hits/matches, prize presentation, bloom + shadows on high quality with an auto/`?q=low` fallback. Kenney CC0 models in `models/` (see `models/CREDITS.txt`). Rules, packs, telemetry and the WM done message are unchanged (`rules.js`, `game.js`). `scene.js` (the 2D v5.0 renderer) is kept for reference.

## 2026-10 rebuild (v5.0.0)
The old 561 KB three.js bundle is replaced by clean Vite + Canvas 2D source in `app/src/` (39 KB):
`rules.js` has the pack format, rounds, heats, pairs and time (tested in `test/rules.test.mjs`); `game.js` has the flow and telemetry; `scene.js` draws the booth; `kit/` is the shared MRJ kit (audio + iOS unlock + mute, responsive canvas, auto low quality, input, fx).
- Build: `npm i && npm run build`. Word Master copy: `node scripts/publish.mjs --wm ../word-master/games/memory-match`.
- Tests: `npm test`. Smoke: `npm run smoke` (zz_test ids).
- Nothing is saved on the device (the old leaderboard, telemetry queue, name, language and teacher switch were localStorage; now they last for the visit only).
- Baked audio only. A word with no clip shows its text on the sound card (no speech synthesis).
- Keys: arrows pick a card, Enter flips. `?q=low` forces low quality. `?autostart=1&round=N` and `?mode=maker` work as before.
