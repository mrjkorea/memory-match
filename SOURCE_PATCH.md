# SOURCE_PATCH.md — apply to `~/.hermes/projects/memory-match/src/main.js`

Canonical Vite source is not in this GitHub Pages dist repo. Apply these exact function replacements in the Mac Vite tree, then rebuild and redeploy.

Also bump `VERSION` constant from `2.7.0` → `2.8.0`.

In CSS (likely `src/style.css` or equivalent), change `.reveals` to `justify-content: center` (was `space-between`).

---

## 1. `showReveal` — cap strip at 2 cards

Replace the existing `showReveal` function with:

```javascript
function showReveal(card) {
  const box = hud.querySelector("#reveals");
  if (!box || !card) return;
  let node = box.querySelector(`[data-uid="${CSS.escape(card.uid)}"]`);
  if (!node) {
    while (box.children.length >= 2) box.firstElementChild?.remove();
    node = document.createElement("div");
    node.className = "reveal-card";
    node.dataset.uid = card.uid;
    box.appendChild(node);
  }
  const animal = card.animal || "";
  const img = animalImg(animal);
  if (card.face === "picture" && img) {
    node.innerHTML = `<img src="${img}" alt="">`;
  } else if (card.face === "picture") {
    node.innerHTML = '<div class="speaker">🃏</div>';
  } else if (card.face === "audio") {
    node.innerHTML = '<div class="speaker">🔊</div>';
  } else {
    node.innerHTML = `<b class="bigword">${esc(card.text || "")}</b>`;
  }
  node.classList.remove("hidden");
}
```

---

## 2. `onShoot` — clear strip on new pair start + after match

In `onShoot`, find the block that starts a flip when not locked:

**Before:**
```javascript
  if (state.locked || state.open.find((c) => c.uid === uid)) return;
  state.locked = true;
  if (state.open.length === 0) state.pairStartedAt = performance.now();
```

**After:**
```javascript
  if (state.locked || state.open.find((c) => c.uid === uid)) return;
  state.locked = true;
  if (state.open.length === 0) {
    state.pairStartedAt = performance.now();
    clearReveals();
  }
```

In the match branch inside the spray callback (after `state.open = []; state.locked = false;`), add:

```javascript
    setTimeout(() => {
      hideReveal(a.uid);
      hideReveal(b.uid);
    }, 700);
```

Full match branch should look like:

```javascript
    if (match) {
      sfx.sparkle();
      booth.sparkle([a.uid, b.uid]);
      sfx.carnyHit();
      state.matched += 1;
      state.open = [];
      state.locked = false;
      setTimeout(() => {
        hideReveal(a.uid);
        hideReveal(b.uid);
      }, 700);
      if (state.matched >= (state.heats.heatPairs || 5)) {
        setTimeout(advanceHeat, 450);
      }
    } else {
      // miss branch unchanged — still hides after g0 (2100ms)
      ...
    }
```

---

## 3. CSS `.reveals`

```css
.reveals {
  /* ...existing positioning... */
  justify-content: center; /* was space-between */
  gap: 8px;
}
```

---

## Notes

- `hideReveal` / `clearReveals` already exist — no changes needed there.
- `startHeat` / deal already calls `clearReveals()` on new heat — keep that.
- Miss timing (`g0` / 2100ms) is unchanged.
- Do not accumulate matched-card history; strip holds only the current open pair (0–2 cards).
