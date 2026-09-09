# CURSOR_RECEIPT.md

| Field | Value |
|-------|-------|
| **Model** | composer-2.5 |
| **Task** | Bottom HUD reveal strip — max 2 current cards, no matched-pair accumulation |
| **Branch** | `cursor/memory-match-bottom-2slot-55fa` |
| **Live target** | https://mrjkorea.github.io/memory-match/ |

## Files touched

| File | Change |
|------|--------|
| `assets/index-CSamQBq4.js` | `showReveal` cap at 2; `onShoot` clears strip on new pair + 700ms post-match clear; VERSION `2.7.0` → `2.8.0` |
| `assets/index-X3vCJJFv.css` | `.reveals` `justify-content: center` (was `space-between`) |
| `SOURCE_PATCH.md` | Exact `src/main.js` replacements for Mac Vite tree |
| `CURSOR_RECEIPT.md` | This receipt |

## Logic summary

1. **`showReveal` (`V`)** — When appending a new card, remove oldest child if strip already has 2.
2. **`onShoot` (`et`)** — When starting a fresh pair (`open.length === 0`), call `clearReveals()` so no stale matched cards remain.
3. **Match** — After sparkle/hit, unlock immediately (unchanged) but `hideReveal` both uids after 700ms so the strip empties before the next flip.
4. **Miss** — Unchanged: both cards hidden after existing 2100ms lock.
5. **New heat/round** — Already called `clearReveals()` in `startHeat`; unchanged.

## How tested

- `node --check assets/index-CSamQBq4.js` — syntax OK
- Verified patched strings present in bundle: `2.8.0`, `tt.children.length>=2`, `setTimeout(()=>{B(Z.uid),B(ht.uid)},700)`, `j()` on `open.length===0`
- CSS patch: `.reveals` uses `justify-content:center`

## Not changed

- 3D booth, ammo, rounds, pack JSON, vocabulary, engine structure
