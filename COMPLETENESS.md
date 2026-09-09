# Completeness — Carnival Memory Match

Live site: https://mrjkorea.github.io/memory-match/  
Pages source: `main` (path `/`). This repo is the published Vite dist.

## Checked

| Surface | Result |
| --- | --- |
| `index.html` | Loads `./assets/` JS+CSS (relative; OK for project Pages). |
| Engine JS/CSS | `assets/index-CSamQBq4.js`, `assets/index-X3vCJJFv.css`. |
| Packs | `packs/animals-1-10.json`, `packs/numbers-1-10.json`, `packs/ui-l1.json`, `packs/index.json`. Word list stays in JSON. |
| Pictures | `pics/*.jpg` — 10 animal 1024×1024 JPEGs, all present and live 200. |
| Baked audio | `audio/en-*.mp3` + `audio/carnies/*.mp3` + `audio/carny-*.mp3`. Real MPEG-1 Layer III, not silent (sample mean ~−24 dB). No `/api/tts`, no `speechSynthesis`. |
| HOW-TO-PLAY | Was 404. Added `HOW-TO-PLAY.md` + start-ticket link + L1 `how` strings. |
| Keyboard | Was missing (`keydown` not in bundle). |
| Touch | `pointerdown` already present (phone tap). |
| Pack swap | URL `?pack=` existed; no UI. |
| L1 help | Locale chips existed; meaning faces used L1; word/picture faces did not show L1. |
| Bow | Render loop overwrote weapon to `x≈0.05` every frame. |
| Bottles | Fair bottles were pale / glassy; western balloons `transparent:true`. |
| Card pictures | HUD used `object-fit:contain`; 3D face stayed hidden with no picture fill. |

`packs/starter-en-ko-v1.json` is leftover (null `audio_id` / `image_id`). Not listed in pack swap.

No `textures/` folder. Booth textures are canvas-generated (not missing files).

## Broken (before this pass)

1. Bow weapon snapped to x≈0 every frame (ignored the offset pose).
2. No computer keys (classroom PC unusable without a mouse).
3. No pack picker (only `?pack=`).
4. Picture paths hardcoded to 10 animal filenames (not pack-driven).
5. HUD pictures letterboxed; 3D card faces never filled.
6. L1 help only on meaning cards.
7. `HOW-TO-PLAY.md` 404.
8. Fair bottles looked like leftover transparent 5×2 glass; western balloons were translucent.

## Fixed

- Opaque painted carnival bottles; western balloons opaque.
- Bow / gun / water / beanbag poses kept in the render loop (bow at x=0.42, not x=0).
- Keys **1–0** shoot the 5×2 toys; **Enter** starts; **Enter/Space** after prize.
- Pack chips from `packs/index.json` (Animals / Numbers). Reloads `?pack=`.
- Pictures from `./pics/{animal}.jpg` or pack `image_id`. Numbers show the digit filling the card.
- HUD `object-fit:cover`. Knockdown paints the picture/word/audio filling the 3D face.
- L1 caption on word / picture / audio reveals when a help language is on.
- `HOW-TO-PLAY.md` + in-game how line (tap + 1–0) in `ui-l1.json`.
- Engine version **2.7.1**.

## Remaining gaps

- `starter-en-ko-v1.json` has no baked audio/pics — omitted from pack UI.
- Google Fonts still load from the network (gameplay does not depend on them).
- SFX oscillators still play under baked carny/word MP3s (local, not TTS).
- Dist-only repo: patches are in the published bundle, not a separate `src/`.
