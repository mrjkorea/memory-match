// Memory Game 3D carnival (three.js) — restores the original 4.2.0 booth scenes and makes them richer:
// six themed booths (fair / boardwalk / field / western / forest / seaside) with the same targets, carny,
// first-person thrower hand + ammo, plus a striped awning with glowing bulbs, bunting, prize shelf with
// Kenney Cube Pets plushies, Kenney Fantasy Town stalls/lanterns in the background, real 3D card flips.
// Same API as the 2D scene.js so game.js (rules + flow) is unchanged.
import { THREE, createStage3D, loadModel, fit, shadowAll, glowTexture, createParticles3D, createTweens } from "./kit/three-stage.js";
import { ANIMAL_PICS } from "./rules.js";
import { ease, clamp, lerp } from "./kit/fx.js";

const FONT = 'Fredoka, "Noto Sans", "Noto Sans KR", "Noto Sans JP", "Noto Sans SC", "Noto Sans Arabic", "Noto Sans Thai", "Noto Sans Devanagari", system-ui, sans-serif';
const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.6, metalness: 0.06, ...o });
const mesh = (g, m, x = 0, y = 0, z = 0, sx, sy, sz) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); if (sx != null) o.scale.set(sx, sy, sz); o.castShadow = true; o.receiveShadow = true; return o; };
const Box = (a, b, c) => new THREE.BoxGeometry(a, b, c), Cyl = (a, b, h, s = 12) => new THREE.CylinderGeometry(a, b, h, s), Sph = (r, a = 14, b = 10) => new THREE.SphereGeometry(r, a, b), Cap = (r, l) => new THREE.CapsuleGeometry(r, l, 4, 8);

// ---- theme table: from the original (colours, fog, sky) + awning colours ----
const TH = {
  fair: { bg: 0x8ec9ee, fog: 0xf0d2b0, fogN: 7, fogF: 22, sky: ["#1d6eb8", "#f7c98a", "#f3a56a"], ground: 0xc4a15a, hemiS: 0xffe2b8, hemiG: 0x8a5a32, sun: 0xfff0cc, sunI: 1.25, accent: 0xffb45a, a: 0xe63946, b: 0xfff3e0, stand: 0x6a3e1c },
  boardwalk: { bg: 0x3aa0d8, fog: 0xb7e4f8, fogN: 8, fogF: 26, sky: ["#1565c0", "#7ec8f0", "#e8f7ff"], ground: 0xd7c2a2, hemiS: 0xd4f0ff, hemiG: 0x8d6a45, sun: 0xffffff, sunI: 1.3, accent: 0x5ad0ff, a: 0x2ec4b6, b: 0xfefae0, stand: 0xf4f0e4 },
  field: { bg: 0x8fd0ff, fog: 0xd7f0c4, fogN: 8, fogF: 24, sky: ["#3d9ae0", "#c6ecff", "#e7ffc8"], ground: 0x67b14a, hemiS: 0xf3ffe8, hemiG: 0x3d6b32, sun: 0xfff6d0, sunI: 1.2, accent: 0xff8a70, a: 0xe2a322, b: 0xfff8e1, stand: 0x3d6b32 },
  western: { bg: 0xe39a58, fog: 0xf0c29a, fogN: 6, fogF: 20, sky: ["#c4622a", "#f0a15a", "#ffe0b0"], ground: 0xc4884a, hemiS: 0xffd8ae, hemiG: 0x7a4a22, sun: 0xffe2b0, sunI: 1.4, accent: 0xffb45a, a: 0xb5562b, b: 0xf7e1b5, stand: 0x5c3317 },
  forest: { bg: 0x214e34, fog: 0x2c5a3e, fogN: 5, fogF: 16, sky: ["#0e3324", "#3d7a52", "#b7d7a4"], ground: 0x3d5c34, hemiS: 0xd5ecc4, hemiG: 0x24341c, sun: 0xfff1c4, sunI: 0.72, accent: 0xc6e88a, a: 0x2e7d4f, b: 0xf1f8e9, stand: 0x4a3524 },
  seaside: { bg: 0x4ec6d4, fog: 0xc8f0ea, fogN: 8, fogF: 26, sky: ["#0277bd", "#7fd4e4", "#fff1c2"], ground: 0xf0d6a4, hemiS: 0xe7f8ff, hemiG: 0xc4a574, sun: 0xffffff, sunI: 1.28, accent: 0xffd06a, a: 0x3d5afe, b: 0xffffff, stand: 0xd7c2a2 },
};
const CARNY = { fair: { skin: 0x5a3318, shirt: 0xf4d35e, pants: 0x2c4a6e, hair: 0x1a1008, hat: "cap" }, boardwalk: { skin: 0x6b3a1c, shirt: 0x7c4dff, pants: 0x1a1a22, hair: 0x1a1008, hat: "visor" }, field: { skin: 0xe8c8a0, shirt: 0x5c3d8a, pants: 0x3e5328, hair: 0xd9cfc4, hat: "straw" }, western: { skin: 0xd4a574, shirt: 0x8d3b1a, pants: 0x3d4a2a, hair: 0x3b2214, hat: "cowboy" }, forest: { skin: 0xf3d0b8, shirt: 0xff8dc8, pants: 0x6a3a8a, hair: 0xf4e9c1, hat: "bun" }, seaside: { skin: 0xd4a574, shirt: 0x1f6f5b, pants: 0x1a1a22, hair: 0x1a1008, hat: "bandana" } };
const HANDS = { ray: [0x5a3318, 0xf4d35e], nia: [0x6b3a1c, 0x7c4dff], walt: [0xe8c8a0, 0x5c3d8a], lumber: [0xc68642, 0xa84932], pirate: [0xd4a574, 0x1f6f5b], cowboy: [0xd4a574, 0xa84932], june: [0xf3d0b8, 0xff8dc8] };
const AMMO_POSE = { beanbags: [0.15, -0.34, -0.85, 0.55, -0.2, 0.35, 0.46], water: [0.16, -0.33, -0.9, 0.35, -0.25, 0, 0.36], bow: [0.15, -0.32, -0.88, 0.4, -0.35, -0.2, 0.5], gun: [0.16, -0.33, -0.9, 0.28, -0.22, 0, 0.32], axe: [0.15, -0.32, -0.86, 0.5, -0.15, 0.4, 0.4], parrot: [0.14, -0.3, -0.85, 0.2, -0.1, 0.1, 0.3] };
const AMMO_COL = { water: 0x7ad8ff, gun: 0xffc54d, bow: 0xf4e9c1, axe: 0xc9a227, parrot: 0xffb347, beanbags: 0xc1121f };
const AMMO_DUR = { beanbags: 0.42, parrot: 0.42, axe: 0.42, water: 0.3, bow: 0.3, gun: 0.18 };
const PETS = ["cat", "dog", "pig", "bunny", "panda", "lion", "penguin", "chick"];

// ---- targets (the original's per-theme knock-down targets) ----
function target(theme) {
  const g = new THREE.Group();
  if (theme === "fair") { const m = mat(0xd5e6ef, { roughness: 0.22, metalness: 0.1 }); g.add(mesh(Cyl(0.075, 0.095, 0.32, 16), m, 0, 0.18), mesh(Cyl(0.032, 0.055, 0.12), m, 0, 0.38), mesh(Cyl(0.038, 0.038, 0.03), mat(0xc1121f), 0, 0.45), mesh(Cyl(0.07, 0.07, 0.04, 16), mat(0xf4e9c1), 0, 0.08)); }
  else if (theme === "boardwalk") { const m = mat(0xffb8c8, { roughness: 0.86 }), s = Sph(1); g.add(mesh(s, m, 0, 0.16, 0, 0.16, 0.15, 0.14), mesh(s, m, 0, 0.32, 0.04, 0.11, 0.1, 0.11), mesh(s, m, -0.09, 0.4, 0.02, 0.045, 0.045, 0.04), mesh(s, m, 0.09, 0.4, 0.02, 0.045, 0.045, 0.04), mesh(s, mat(0xff8dc8), 0, 0.14, 0.12, 0.08, 0.07, 0.04), mesh(s, mat(0x1a1008), -0.035, 0.34, 0.13, 0.016, 0.02, 0.016), mesh(s, mat(0x1a1008), 0.035, 0.34, 0.13, 0.016, 0.02, 0.016)); }
  else if (theme === "field") { const w = mat(0x6b3a1a, { roughness: 0.74 }); g.add(mesh(Cyl(0.028, 0.038, 0.2, 8), w, 0, 0.1, -0.08), mesh(Box(0.18, 0.035, 0.07), w, 0, 0.015, -0.08)); const f = new THREE.Group(); f.position.set(0, 0.34, 0); [[0.16, 0x111111], [0.131, 0xf4f4f4], [0.102, 0xd0121c], [0.073, 0xf7f7f7], [0.045, 0x168a32], [0.022, 0xe1061e]].forEach(([r, c], i) => { const d = new THREE.Mesh(new THREE.CircleGeometry(r, 40), new THREE.MeshStandardMaterial({ color: c, roughness: 0.5 })); d.position.z = i * 0.003; f.add(d); }); g.add(f); }
  else if (theme === "western") { g.add(mesh(Sph(0.15, 16, 14), mat(0x3ec6ff, { roughness: 0.22, transparent: true, opacity: 0.92 }), 0, 0.22), mesh(Sph(0.03), mat(0x3d220f), 0, 0.08)); }
  else if (theme === "forest") { g.add(mesh(Cyl(0.15, 0.16, 0.26), mat(0x6a3e1c, { roughness: 0.85 }), 0, 0.16), mesh(Cyl(0.14, 0.14, 0.03), mat(0xe8d4a8, { roughness: 0.7 }), 0, 0.29), mesh(Cyl(0.05, 0.05, 0.02, 10), mat(0x3d220f), 0, 0.305)); }
  else { const m = mat(0xffd24a, { metalness: 0.92, roughness: 0.18, emissive: 0x8a6a10, emissiveIntensity: 0.35 }); [[0, 0.08, 0, 0.2], [0.07, 0.09, 0.04, -0.4], [-0.06, 0.09, 0.03, 0.5], [0.02, 0.14, -0.02, 0.1]].forEach(([x, y, z, r]) => { const c = mesh(Cyl(0.055, 0.055, 0.012, 16), m, x, y, z); c.rotation.z = r; g.add(c); }); g.add(mesh(Box(0.12, 0.05, 0.05), m, -0.04, 0.06, -0.05)); }
  return g;
}
function stand(theme) { return mesh(Cyl(0.045, 0.055, 0.08, 8), mat(TH[theme].stand, { roughness: 0.86 }), 0, 0.03, 0); }

// ---- carny (original P0 + hats) ----
function carny(c) {
  const g = new THREE.Group(), skin = mat(c.skin, { roughness: 0.58 }), shirt = mat(c.shirt, { roughness: 0.72 }), pants = mat(c.pants, { roughness: 0.78 }), hair = mat(c.hair, { roughness: 0.8 }), eye = mat(0x1a1008, { roughness: 0.3 });
  g.add(mesh(Cap(0.16, 0.26), shirt, 0, 0.62), mesh(Cap(0.07, 0.2), pants, -0.08, 0.28), mesh(Cap(0.07, 0.2), pants, 0.08, 0.28));
  const head = new THREE.Group(); head.position.set(0, 0.98, 0); g.add(head);
  head.add(mesh(Sph(0.14, 16, 12), skin),  mesh(Sph(0.018, 8, 6), eye, -0.05, 0.02, 0.12), mesh(Sph(0.018, 8, 6), eye, 0.05, 0.02, 0.12));
  const hairCap = mesh(new THREE.SphereGeometry(0.148, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), hair, 0, 0.01, -0.01); hairCap.rotation.x = -0.45; head.add(hairCap, mesh(Sph(0.12, 12, 8), hair, 0, 0.0, -0.05)); // hair on top/back only, face stays visible
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.008, 6, 16, Math.PI), eye); smile.rotation.z = Math.PI; smile.position.set(0, -0.03, 0.125); head.add(smile);
  const arm = new THREE.Group(); arm.position.set(0.18, 0.78, 0.02); arm.add(mesh(Cap(0.05, 0.2), shirt, 0.08, -0.12, 0.08)); g.add(arm);
  const arm2 = mesh(Cap(0.05, 0.2), shirt, -0.2, 0.66, 0.04); arm2.rotation.z = -0.3; g.add(arm2);
  const H = c.hat, hh = (geo, m, x, y, z) => head.add(mesh(geo, m, x, y - 0.98, z));
  if (H === "cowboy") { hh(Cyl(0.2, 0.2, 0.025), mat(0x5c3310), 0, 1.08, 0); hh(Cyl(0.11, 0.12, 0.11), mat(0x4a2a0e), 0, 1.15, 0); }
  else if (H === "visor") { const v = mesh(Box(0.22, 0.02, 0.12), mat(0x1a1a22), 0, 0.0, 0.1); v.rotation.x = -0.45; head.add(v); }
  else if (H === "straw") { hh(Cyl(0.18, 0.18, 0.02), mat(0xe6c36a), 0, 1.06, 0); hh(Cyl(0.1, 0.11, 0.08, 10), mat(0xc9a44e), 0, 1.12, 0); }
  else if (H === "cap") { hh(new THREE.SphereGeometry(0.14, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xc1121f), 0, 1.02, 0); hh(Box(0.16, 0.018, 0.1), mat(0xc1121f), 0, 1.0, 0.12); }
  else if (H === "bun") { hh(Sph(0.07, 8, 6), mat(0xf4e9c1), 0, 1.14, -0.02); }
  else if (H === "bandana") { hh(new THREE.SphereGeometry(0.145, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(0x9e1b2a), 0, 1.02, 0); }
  g.userData = { arm, head };
  return g;
}
function cloud(x, y, z, s, c = 0xfff6ea) { const g = new THREE.Group(), m = mat(c, { roughness: 1, metalness: 0 }); g.add(mesh(Sph(0.38, 8, 6), m), mesh(Sph(0.28, 8, 6), m, 0.34, 0.06), mesh(Sph(0.24, 8, 6), m, -0.3, 0.02)); g.position.set(x, y, z); g.scale.setScalar(s); g.traverse((o) => (o.castShadow = false)); return g; }

// ---- first-person hand + ammo (original rigs) ----
function hand(carnyKey, held) {
  const [skin, sleeve] = HANDS[carnyKey] || HANDS.ray, g = new THREE.Group(), s = mat(skin), sl = mat(sleeve);
  const fore = mesh(Cyl(0.032, 0.04, 0.28, 10), sl, -0.02, -0.06, 0.1); fore.rotation.set(0.35, 0, 0.35); g.add(fore, mesh(Sph(0.05, 12, 10), s, 0.02, 0.04, -0.02), mesh(Box(0.1, 0.055, 0.12), s, 0.02, 0.05, -0.1));
  for (let k = 0; k < 4; k++) g.add(mesh(Cap(0.012, 0.05), s, -0.03 + k * 0.018, 0.07, -0.17));
  if (held) { held.position.set(0.02, 0.06, -0.2); g.add(held); }
  const noz = new THREE.Object3D(); noz.position.set(0.02, 0.06, -0.26); g.add(noz); g.userData.nozzle = noz; return g;
}
function beanbag() { const g = new THREE.Group(); g.add(mesh(Box(0.08, 0.045, 0.07), mat(0xc1121f, { roughness: 0.9 })), mesh(Box(0.07, 0.02, 0.06), mat(0xf4e9c1, { roughness: 0.9 }), 0, 0.018, 0)); return g; }
function axe() { const g = new THREE.Group(), h = mesh(Cyl(0.012, 0.016, 0.28, 8), mat(0x6a3e1c)); h.rotation.x = 0.2; g.add(h, mesh(Box(0.14, 0.08, 0.03), mat(0x8a949c, { metalness: 0.75, roughness: 0.28 }), 0.02, 0.12, 0)); return g; }
function parrot() { const g = new THREE.Group(), s = Sph(1, 12, 10); g.add(mesh(s, mat(0xc1121f), 0, 0, 0, 0.138, 0.112, 0.2), mesh(s, mat(0x1e88e5), 0, 0.088, 0.1, 0.08, 0.075, 0.08)); const w1 = mesh(s, mat(0xf4d35e), -0.12, 0.02, 0, 0.12, 0.032, 0.15); w1.rotation.z = 0.45; const w2 = mesh(s, mat(0xf4d35e), 0.12, 0.02, 0, 0.12, 0.032, 0.15); w2.rotation.z = -0.45; const bk = mesh(new THREE.ConeGeometry(0.038, 0.11, 8), mat(0xe85d04), 0, 0.08, 0.21); bk.rotation.x = Math.PI / 2; g.add(w1, w2, bk); g.userData.wings = [w1, w2]; return g; }
function rig(ammo, carnyKey) {
  if (ammo === "water") { const g = new THREE.Group(), y = mat(0xffd23f, { roughness: 0.35 }), bl = mat(0x2ea8d8, { roughness: 0.3, metalness: 0.15 }); g.add(mesh(Box(0.09, 0.08, 0.18), y, 0, 0, 0.02)); const n = mesh(Cyl(0.02, 0.028, 0.34), bl, 0, 0.02, -0.22); n.rotation.x = Math.PI / 2; g.add(n, mesh(Sph(0.07), mat(0x5ce0e6, { transparent: true, opacity: 0.7, roughness: 0.15 }), 0.01, 0.1, 0.04)); const gr = mesh(Box(0.055, 0.15, 0.06), mat(0xe85d04), 0, -0.11, 0.04); gr.rotation.x = 0.32; g.add(gr); const noz = new THREE.Object3D(); noz.position.set(0, 0.02, -0.4); g.add(noz); g.userData.nozzle = noz; return g; }
  if (ammo === "bow") { const g = new THREE.Group(), b = mesh(new THREE.TorusGeometry(0.13, 0.01, 7, 22, Math.PI * 1.05), mat(0x6a3e1c), 0.05, 0.02, -0.02); b.rotation.set(0.15, 1.2, 0.35); g.add(b); const a = mesh(Cyl(0.004, 0.004, 0.26, 6), mat(0x5c3317), 0.03, 0.03, -0.12); a.rotation.x = Math.PI / 2; g.add(a); const noz = new THREE.Object3D(); noz.position.set(0.03, 0.03, -0.28); g.add(noz); g.userData.nozzle = noz; return g; }
  if (ammo === "gun") { const g = new THREE.Group(), m = mat(0x1c1c22, { metalness: 0.82, roughness: 0.22 }); g.add(mesh(Box(0.07, 0.085, 0.16), m, 0, 0.03, 0.02)); const br = mesh(Cyl(0.02, 0.022, 0.38), m, 0, 0.04, -0.24); br.rotation.x = Math.PI / 2; g.add(br, mesh(Cyl(0.055, 0.055, 0.055), m, 0, 0.03, 0.04)); const st = mesh(Box(0.055, 0.16, 0.07), mat(0x6a3e1c, { roughness: 0.65 }), 0, -0.1, 0.07); st.rotation.x = 0.42; g.add(st); const noz = new THREE.Object3D(); noz.position.set(0, 0.04, -0.44); g.add(noz); g.userData.nozzle = noz; return g; }
  return hand(carnyKey, ammo === "parrot" ? parrot() : ammo === "axe" ? axe() : beanbag());
}
function projectile(ammo) {
  if (ammo === "beanbags") return beanbag();
  if (ammo === "parrot") return parrot();
  if (ammo === "axe") { const a = axe(); a.scale.setScalar(1.35); return a; }
  if (ammo === "bow") { const g = new THREE.Group(), sh = new THREE.Mesh(Cyl(0.018, 0.02, 0.5, 8), mat(0x4a2c12, { roughness: 0.42 })); sh.rotation.x = -Math.PI / 2; g.add(sh); const tip = new THREE.Mesh(new THREE.ConeGeometry(0.036, 0.1, 8), mat(0xe7eef6, { metalness: 0.86, roughness: 0.16 })); tip.rotation.x = -Math.PI / 2; tip.position.z = -0.28; g.add(tip); return g; }
  if (ammo === "gun") return new THREE.Mesh(Sph(0.016, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffd06a).multiplyScalar(3), toneMapped: false }));
  return new THREE.Mesh(Sph(0.022, 8, 6), new THREE.MeshStandardMaterial({ color: 0x7ad8ff, transparent: true, opacity: 0.85, roughness: 0.15, emissive: 0x3aa0ff, emissiveIntensity: 0.55 }));
}

// ---- booth set dressing (original scenes + extra richness) ----
function booth(theme, M) {
  const T = TH[theme], g = new THREE.Group();
  // sky dome + ground
  const c = document.createElement("canvas"); c.width = 8; c.height = 256; const x = c.getContext("2d"), gr = x.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, T.sky[0]); gr.addColorStop(0.52, T.sky[1]); gr.addColorStop(1, T.sky[2]); x.fillStyle = gr; x.fillRect(0, 0, 8, 256);
  const st = new THREE.CanvasTexture(c); st.colorSpace = THREE.SRGBColorSpace;
  const sky = new THREE.Mesh(new THREE.SphereGeometry(26, 18, 12), new THREE.MeshBasicMaterial({ map: st, side: THREE.BackSide, depthWrite: false, fog: false })); sky.frustumCulled = false; g.add(sky);
  const ground = new THREE.Mesh(new THREE.CircleGeometry(16, 40), mat(T.ground, { roughness: 0.95 })); ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; g.add(ground);
  const L = (geo, m, x, y, z) => { const o = mesh(geo, m, x, y, z); g.add(o); return o; };
  // theme backdrops (from the original)
  if (theme === "fair") { const w = mat(0x9e2a2a, { roughness: 0.78 }), cr = mat(0xf4e9c1, { roughness: 0.7 }); L(Box(3.4, 1.7, 0.16), w, 0, 1.15, -1.15); const r1 = L(Box(1.9, 0.1, 1.3), w, -0.7, 2.15, -1.15); r1.rotation.z = 0.45; const r2 = L(Box(1.9, 0.1, 1.3), w, 0.7, 2.15, -1.15); r2.rotation.z = -0.45; L(Box(0.7, 0.9, 0.08), cr, 0, 0.7, -1.04); const hay = mat(0xd6b25a, { roughness: 0.95 }); const h1 = L(Cyl(0.28, 0.28, 0.42, 10), hay, -2.15, 0.22, -0.4); h1.rotation.z = Math.PI / 2; const h2 = L(Cyl(0.26, 0.26, 0.4, 10), hay, 2.2, 0.2, -0.55); h2.rotation.z = Math.PI / 2; g.add(cloud(-3.2, 3.4, -4, 1.1), cloud(2.6, 3.7, -5, 0.85)); L(Sph(0.42, 12, 10), new THREE.MeshBasicMaterial({ color: 0xffe08a }), 3.2, 3.1, -6); }
  else if (theme === "boardwalk") { const wtr = new THREE.Mesh(new THREE.PlaneGeometry(18, 8), mat(0x1f8ec4, { roughness: 0.18, metalness: 0.25, transparent: true, opacity: 0.92 })); wtr.rotation.x = -Math.PI / 2; wtr.position.set(0, 0.03, -3.2); g.add(wtr); g.userData.water = wtr; const pl = mat(0xe7d8b8, { roughness: 0.8 }); for (let r = 0; r < 7; r++) L(Box(3.2, 0.05, 0.28), pl, 0, 0.06, 0.8 - r * 0.42); const po = mat(0xc98a4a, { roughness: 0.84 }); L(Cyl(0.06, 0.07, 1.1, 8), po, -1.55, 0.5, -0.2); L(Cyl(0.06, 0.07, 1.1, 8), po, 1.55, 0.5, -0.2); L(Box(3.3, 0.08, 0.08), mat(0xffffff), 0, 0.95, -0.2); g.add(cloud(-2.4, 3.2, -6, 0.9, 0xffffff), cloud(2.8, 3.5, -7, 1.15, 0xffffff)); }
  else if (theme === "field") { const fl = new THREE.InstancedMesh(Sph(0.07, 6, 5), mat(0xffffff, { roughness: 0.45 }), 60), d = new THREE.Object3D(), col = new THREE.Color(), pal = [0xff5e8f, 0xffd23f, 0xffffff, 0xc56bff, 0xff8a3a]; for (let u = 0; u < 60; u++) { const s = u % 2 ? 1 : -1; d.position.set(s * (1.5 + (u % 5) * 0.32), 0.06, -0.4 - (u % 9) * 0.42); d.scale.setScalar(0.7 + (u % 4) * 0.15); d.updateMatrix(); fl.setMatrixAt(u, d.matrix); fl.setColorAt(u, col.setHex(pal[u % 5])); } g.add(fl); L(Sph(2.2, 14, 10), mat(0x8ed36a, { roughness: 0.9 }), -3.5, -0.6, -6); L(Sph(1.7, 14, 10), mat(0x79c45c, { roughness: 0.9 }), 3.8, -0.7, -6.5); g.add(cloud(0, 3.6, -6, 1.2)); L(Sph(0.38, 12, 10), new THREE.MeshBasicMaterial({ color: 0xfff2c4 }), -2.8, 3.3, -7); }
  else if (theme === "western") { const w = mat(0x8a4e22, { roughness: 0.78 }); L(Box(3.3, 1.8, 0.14), w, 0, 1.15, -1.2); L(Box(3.5, 0.28, 0.2), mat(0x5c3310), 0, 2.15, -1.15); L(Box(1.2, 0.22, 0.16), mat(0xc9a44a), 0, 1.85, -1.08); const ca = mat(0x3e8f45, { roughness: 0.7 }); L(Cap(0.08, 0.55), ca, -2.05, 0.45, -0.3); L(Cap(0.07, 0.4), ca, 2.15, 0.38, -0.45); const arm = L(Cap(0.05, 0.22), ca, -1.9, 0.62, -0.3); arm.rotation.z = -0.9; L(Sph(0.55, 14, 10), new THREE.MeshBasicMaterial({ color: 0xffc46a }), 2.4, 3.2, -6); }
  else if (theme === "forest") { const tr = mat(0x5a3a22, { roughness: 0.9 }), lf1 = mat(0x2f6b3a, { roughness: 0.85 }), lf2 = mat(0x3f8a48, { roughness: 0.85 }); [-1.85, 1.9].forEach((x, i) => { L(Cyl(0.12, 0.16, 1.5, 8), tr, x, 0.75, -1.3); L(Sph(0.55, 10, 8), i ? lf2 : lf1, x, 1.7, -1.3); }); const cn = L(Sph(3.2, 14, 10), mat(0x1d4a2c, { roughness: 0.9 }), 0, 4.3, -0.9); cn.scale.set(1.4, 0.4, 1); const pl = new THREE.PointLight(0xfff2c2, 0.6 * 3, 6); pl.position.set(0.4, 2.4, 0.6); g.add(pl); }
  else { const wtr = new THREE.Mesh(new THREE.PlaneGeometry(18, 7), mat(0x1aa0b8, { roughness: 0.15, metalness: 0.3, transparent: true, opacity: 0.9 })); wtr.rotation.x = -Math.PI / 2; wtr.position.set(0, 0.02, -3.4); g.add(wtr); g.userData.water = wtr; const bt = L(Box(0.9, 0.22, 0.4), mat(0xf4f0e4), 2.1, 0.16, -1.4); bt.rotation.z = 0.08; L(Cyl(0.03, 0.03, 0.7, 6), mat(0x6a3e1c), 2.1, 0.5, -1.4); g.add(cloud(-2.5, 3.3, -6, 1)); L(Sph(0.36, 12, 10), new THREE.MeshBasicMaterial({ color: 0xfff6d0 }), 3.1, 3.15, -7); }

  // --- richer booth frame: striped awning, posts, glowing bulbs, bunting, counter, prize shelf ---
  const A = mat(T.a, { roughness: 0.55 }), B = mat(T.b, { roughness: 0.6 }), wood = mat(0x7a4a28, { roughness: 0.8 });
  for (const s of [-1, 1]) { L(Cyl(0.06, 0.07, 2.6, 10), wood, s * 1.62, 1.3, 0.55); }
  const N = 12, aw = new THREE.Group(); aw.position.set(0, 2.55, 0.55);
  for (let i = 0; i < N; i++) { const m = new THREE.Mesh(Box(3.4 / N, 0.06, 0.62), i % 2 ? B : A); m.position.set(-1.7 + (i + 0.5) * (3.4 / N), 0, -0.1); m.rotation.x = 0.28; m.castShadow = true; aw.add(m); const sc = new THREE.Mesh(new THREE.CylinderGeometry(3.4 / N / 2, 3.4 / N / 2, 0.04, 14, 1, false, 0, Math.PI), i % 2 ? B : A); sc.rotation.set(Math.PI / 2, 0, Math.PI / 2); sc.position.set(-1.7 + (i + 0.5) * (3.4 / N), -0.1, 0.2); aw.add(sc); }
  g.add(aw);
  const bulbs = [], bulbOn = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xfff1a0).multiplyScalar(2.2), toneMapped: false }), bulbOff = new THREE.MeshBasicMaterial({ color: 0x9a8a40 });
  for (let i = 0; i < 15; i++) { const b = new THREE.Mesh(Sph(0.032, 8, 6), bulbOn); b.position.set(-1.6 + i * (3.2 / 14), 2.36 - Math.sin((i / 14) * Math.PI) * 0.06, 0.82); g.add(b); bulbs.push(b); }
  // bunting string across the back
  const flagCols = [T.a, 0xffd23f, 0x3ec7ff, T.b, 0x7cff6b];
  for (let i = 0; i < 13; i++) { const f = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.16, 3), mat(flagCols[i % 5], { roughness: 0.7 })); f.rotation.x = Math.PI; const t = i / 12; f.position.set(-1.5 + t * 3, 2.24 - Math.sin(t * Math.PI) * 0.16, 0.86); g.add(f); }
  // counter in front with striped skirt
  L(Box(3.3, 0.07, 0.4), wood, 0, 0.34, 1.2);
  for (let i = 0; i < 10; i++) L(Box(0.33, 0.3, 0.04), i % 2 ? A : B, -1.485 + i * 0.33, 0.16, 1.4);
  // card shelves (the cards stand on these)
  L(Box(2.9, 0.05, 0.36), wood, 0, 1.12, -0.08); L(Box(2.9, 0.05, 0.36), wood, 0, 0.46, 0.1);
  // back prize shelf with plush prizes (Kenney Cube Pets) + side stalls / lanterns (Kenney Fantasy Town)
  L(Box(3.0, 0.05, 0.3), wood, 0, 1.92, -0.6);
  const prizes = [];
  if (M) {
    PETS.slice(0, 6).forEach((p, i) => { const src = M["pet-" + p]; if (!src) return; const o = shadowAll(fit(src.clone(true), 0.32)); o.position.set(-1.25 + i * 0.5, 2.1, -0.6); o.rotation.y = (i - 2.5) * -0.12; g.add(o); prizes.push(o); });
    const stall = (n, x, z, r) => { const s = M[n]; if (!s) return; const o = shadowAll(fit(s.clone(true), 2.4)); o.position.set(x, 1.1, z); o.rotation.y = r; g.add(o); };
    stall("stall-red", -3.6, -2.6, 0.5); stall("stall-green", 3.7, -2.9, -0.5);
    for (const s of [-1, 1]) { const ln = M.lantern; if (ln) { const o = fit(ln.clone(true), 0.36); o.position.set(s * 1.62, 2.0, 0.72); g.add(o); const pl = new THREE.PointLight(0xffc46a, 1.6, 3.2, 1.6); pl.position.set(s * 1.62, 1.95, 0.85); g.add(pl); } }
    const bn = M[theme === "forest" || theme === "field" ? "banner-green" : "banner-red"]; if (bn) for (const s of [-1, 1]) { const o = fit(bn.clone(true), 0.9); o.position.set(s * 1.62, 1.55, 0.66); g.add(o); }
    const tr = M["tree-high-round"]; if (tr && theme !== "boardwalk" && theme !== "seaside") { for (const [x, z, s] of [[-5.2, -5, 3.2], [5.4, -5.6, 3.6]]) { const o = shadowAll(fit(tr.clone(true), s)); o.position.set(x, s / 2, z); g.add(o); } }
  }
  g.userData.bulbs = bulbs; g.userData.bulbOn = bulbOn; g.userData.bulbOff = bulbOff; g.userData.prizes = prizes;
  // lights
  g.add(new THREE.HemisphereLight(T.hemiS, T.hemiG, 0.95));
  const sun = new THREE.DirectionalLight(T.sun, T.sunI * 1.6); sun.position.set(-2.5, 6.5, 3.5); sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024); Object.assign(sun.shadow.camera, { left: -4, right: 4, top: 4, bottom: -2, near: 1, far: 16 }); sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.02; g.add(sun);
  const acc = new THREE.PointLight(T.accent, 0.55 * 3, 8); acc.position.set(0.4, 1.8, 1.4); g.add(acc);
  // carny
  const ann = carny(CARNY[theme] || CARNY.fair); g.add(ann); g.userData.carny = ann;
  if (theme === "seaside") { const p = parrot(); p.scale.setScalar(0.42); p.position.set(-0.18, 1.08, 0.04); ann.add(p); }
  return g;
}

// ---- card faces (canvas textures, same faces as the original) ----
const picCache = new Map();
function loadPic(url) { if (!url) return Promise.resolve(null); if (!picCache.has(url)) picCache.set(url, new Promise((r) => { const i = new Image(); if (/^https?:/i.test(url)) i.crossOrigin = "anonymous"; i.onload = () => r(i); i.onerror = () => r(null); i.src = url; })); return picCache.get(url); }
function rr(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
function fitText(g, t, max, w) { let fs = max; g.font = `700 ${fs}px ${FONT}`; while (fs > 18 && g.measureText(t).width > w) { fs -= 4; g.font = `700 ${fs}px ${FONT}`; } return fs; }
function faceCanvas(c, locale, im, matched = false) {
  const S = 512, cv = document.createElement("canvas"); cv.width = cv.height = S; const g = cv.getContext("2d");
  g.fillStyle = "#fffaf0"; rr(g, 0, 0, S, S, 48); g.fill(); g.lineWidth = 22; g.strokeStyle = matched ? "#3ddc84" : "#ffd23f"; rr(g, 14, 14, S - 28, S - 28, 38); g.stroke();
  g.textAlign = "center"; g.textBaseline = "middle"; g.fillStyle = "#1d2b45";
  const pic = () => { if (im) { const m = Math.min(im.width, im.height); g.save(); rr(g, 40, 40, S - 80, S - 80, 30); g.clip(); g.drawImage(im, (im.width - m) / 2, (im.height - m) / 2, m, m, 40, 40, S - 80, S - 80); g.restore(); return; }
    if (c.n) { const t = clamp(Math.round(c.n), 1, 10), cols = t <= 3 ? t : t <= 6 ? 3 : t <= 8 ? 4 : 5, rows = Math.ceil(t / cols), cw = (S * 0.8) / cols, ch = (S * 0.6) / rows, R = Math.min(cw, ch) * 0.34, pal = ["#c1121f", "#2ec4b6", "#e2a322", "#ff4d8d", "#3d6bff", "#e85d04", "#7c4dff", "#2e9e4f"];
      for (let k = 0; k < t; k++) { g.fillStyle = pal[k % 8]; g.beginPath(); g.arc(S * 0.1 + (k % cols) * cw + cw / 2, S * 0.2 + Math.floor(k / cols) * ch + ch / 2, R, 0, 7); g.fill(); g.lineWidth = 6; g.strokeStyle = "#140c08"; g.stroke(); } return; }
    fitText(g, c.itemEn || "?", 120, S * 0.8); g.fillText(c.itemEn || "?", S / 2, S / 2); };
  if (c.face === "picture") pic();
  else if (c.face === "audio") { if (c.noAudio) { fitText(g, c.itemEn, 110, S * 0.8); g.fillText(c.itemEn, S / 2, S / 2); } else { g.fillStyle = "#3d6bff"; g.beginPath(); g.moveTo(150, 200); g.lineTo(210, 200); g.lineTo(300, 120); g.lineTo(300, 392); g.lineTo(210, 312); g.lineTo(150, 312); g.closePath(); g.fill(); g.strokeStyle = "#3d6bff"; g.lineWidth = 18; g.lineCap = "round"; g.beginPath(); g.arc(320, 256, 60, -0.8, 0.8); g.stroke(); g.beginPath(); g.arc(320, 256, 110, -0.7, 0.7); g.stroke(); } }
  else if ((c.face === "digit" || c.face === "l1") && !c.text) pic();
  else if (c.face === "word") { const two = c.l1 && locale !== "en" && c.l1 !== c.text; fitText(g, c.text, 120, S * 0.84); g.fillText(c.text, S / 2, two ? S * 0.42 : S / 2); if (two) { g.fillStyle = "#8a5a00"; fitText(g, c.l1, 64, S * 0.84); g.fillText(c.l1, S / 2, S * 0.7); } }
  else { g.fillStyle = c.face === "l1" ? "#8a2be2" : "#1d2b45"; fitText(g, c.text, c.face === "digit" ? 240 : 110, S * 0.84); g.fillText(c.text, S / 2, S / 2); }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
function backCanvas(theme) {
  const T = TH[theme], S = 256, cv = document.createElement("canvas"); cv.width = cv.height = S; const g = cv.getContext("2d"), hex = (n) => "#" + n.toString(16).padStart(6, "0");
  g.fillStyle = "#fffaf0"; rr(g, 0, 0, S, S, 26); g.fill(); g.strokeStyle = hex(T.a); g.lineWidth = 14; rr(g, 10, 10, S - 20, S - 20, 20); g.stroke();
  for (let k = 4; k >= 1; k--) { g.fillStyle = k % 2 ? hex(T.a) : "#ffffff"; g.beginPath(); g.arc(S / 2, S / 2, (S * 0.34 * k) / 4, 0, 7); g.fill(); }
  g.fillStyle = "#ffd23f"; g.beginPath(); g.arc(S / 2, S / 2, S * 0.06, 0, 7); g.fill();
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export async function createScene3D(host, L, fx, stage, { quality } = {}) {
  const S3 = createStage3D(host, { quality, shadows: true, fov: 40, clear: 0x8ec9ee, bloom: { strength: 0.55, radius: 0.45, threshold: 0.88 } });
  const { scene, camera } = S3; scene.fog = new THREE.Fog(0xf0d2b0, 7, 22); scene.add(camera);
  const tw = createTweens(), parts = createParticles3D(scene, { max: 900, texture: glowTexture() });
  const names = ["town/stall-red", "town/stall-green", "town/lantern", "town/banner-red", "town/banner-green", "town/tree-high-round", ...PETS.map((p) => "pets/animal-" + p)];
  const loaded = await Promise.all(names.map((n) => loadModel(`./models/${n}.glb`)));
  const M = {}; names.forEach((n, i) => { const k = n.replace("town/", "").replace("pets/animal-", "pet-"); M[k] = loaded[i]; });

  let def = { carny: "ray", ammo: "beanbags", theme: "fair" }, theme = "fair", root = null, cards = [], ep = 0, focusUid = null, backTex = null, heldRig = null, recoil = 0, carnyMood = { kind: "idle", t: 0 }, prizeObj = null, presenting = false;
  const views = new Map(); // uid -> view
  const hits = [];
  function setTheme(d) {
    def = d; theme = d.theme || "fair"; ep++;
    if (root) { scene.remove(root); dispose(root); }
    root = booth(theme, M); scene.add(root);
    const T = TH[theme]; scene.background = new THREE.Color(T.bg); scene.userData.softSky = T.sky; scene.fog.color.setHex(T.fog); scene.fog.near = T.fogN; scene.fog.far = T.fogF; S3.renderer.setClearColor(T.bg, 1);
    document.documentElement.setAttribute("data-arena", theme);
    backTex && backTex.dispose(); backTex = backCanvas(theme);
    if (heldRig) camera.remove(heldRig); heldRig = rig(d.ammo, d.carny); shadowAll(heldRig, false, false); camera.add(heldRig);
    if (prizeObj) { scene.remove(prizeObj); prizeObj = null; } presenting = false;
    layoutCarny(); clearCards();
  }
  function dispose(o) { o.traverse((m) => { if (m.geometry) m.geometry.dispose(); }); }
  function clearCards() { for (const v of views.values()) root && root.remove(v.anchor); views.clear(); hits.length = 0; if (typeof strip !== "undefined") strip.innerHTML = ""; }
  const portrait = () => S3.w / S3.h < 0.85;
  function camDist() { const P = portrait(), fov = P ? 50 : 40, a = S3.w / S3.h, need = (P ? 2.3 : 3.0) / (2 * Math.tan(THREE.MathUtils.degToRad(fov / 2)) * a); return Math.max(P ? 4.45 : 5.15, need); } // narrow phones: back up so all 5 columns fit
  function layoutCamera() { const P = portrait(); camera.fov = P ? 50 : 40; camera.position.set(0, P ? 1.18 : 1.32, camDist()); camera.lookAt(0, 1.02, 0); camera.updateProjectionMatrix(); }
  function layoutCarny() { const a = root && root.userData.carny; if (!a) return; if (portrait()) { a.position.set(0.05, 0, -1.25); a.scale.setScalar(0.72); a.rotation.y = 0.05; } else { a.position.set(-1.95, 0, 0.05); a.scale.setScalar(1.05); a.rotation.y = 0.5; } a.userData.baseY = a.position.y; }
  function slotPos(i, n) { // original grid: 5 columns, 2 rows (or more)
    const P = portrait(), H = 5, Q = Math.max(1, Math.ceil(n / H)), Tx = P ? 0.4 : 0.52, A = i % H, U = Math.floor(i / H), inRow = Math.min(H, n - U * H);
    let y, z; if (Q <= 2) { y = U === 0 ? (P ? 1.28 : 1.42) : P ? 0.68 : 0.76; z = U === 0 ? -0.08 : 0.1; } else { y = (P ? 1.55 : 1.7) - (U * (P ? 1.15 : 1.25)) / (Q - 1); z = -0.05 + U * 0.05; }
    return new THREE.Vector3((A - (inRow - 1) / 2) * Tx, y - 0.3, z);
  }
  function layout() { layoutCamera(); layoutCarny(); cards.forEach((c, i) => { const v = views.get(c.uid); if (v) v.anchor.position.copy(slotPos(i, cards.length)); }); }
  S3.onResize = () => { layout(); parts.setScale(S3.h / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)))); };
  S3.onResize();

  function makeCard(c, i, n) {
    const anchor = new THREE.Group(); anchor.position.copy(slotPos(i, n));
    const s = portrait() ? 0.34 : 0.4;
    const faceMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 }), backMat = new THREE.MeshStandardMaterial({ map: backTex, roughness: 0.5 }), edge = mat(0xf4e9c1, { roughness: 0.6 });
    const card = new THREE.Mesh(new THREE.BoxGeometry(s, s, 0.018), [edge, edge, edge, edge, backMat, faceMat]); card.castShadow = true;
    const pivot = new THREE.Group(); pivot.position.set(0, 0.3, -0.03); pivot.add(card); anchor.add(pivot);
    const tg = target(theme); tg.scale.setScalar(theme === "field" ? 1.15 : theme === "seaside" ? 1.7 : 1.42 * 0.82); tg.position.set(0, 0.06, 0.1); shadowAll(tg, true, false); const tgS = tg.scale.x;
    const st = stand(theme); st.position.z = 0.1; anchor.add(st, tg);
    const ring = new THREE.Mesh(new THREE.RingGeometry(s * 0.62, s * 0.7, 40), new THREE.MeshBasicMaterial({ color: new THREE.Color(0x5a8bff).multiplyScalar(1.6), transparent: true, opacity: 0, toneMapped: false, depthWrite: false })); ring.position.set(0, 0.3, 0.0); anchor.add(ring);
    const hit = new THREE.Mesh(new THREE.SphereGeometry(0.26, 8, 6), new THREE.MeshBasicMaterial({ visible: false })); hit.position.set(0, 0.3, 0.04); hit.userData.uid = c.uid; anchor.add(hit); hits.push(hit);
    root.add(anchor);
    const v = { anchor, pivot, card, faceMat, tg, ring, hit, flip: 0, target: 0, shake: 0, gone: false, tgDown: 0, tgS, c };
    const url = c.picture || (c.fromSession ? "" : ANIMAL_PICS[String(c.animal || "").toLowerCase()]);
    const needPic = c.face === "picture" || ((c.face === "digit" || c.face === "l1") && !c.text);
    (needPic ? loadPic(url) : Promise.resolve(null)).then((im) => { v.im = im; v.faceMat.map = faceCanvas(c, L.locale, im); v.faceMat.needsUpdate = true; });
    // deal-in: drop from above with a bounce
    anchor.scale.setScalar(0.001); setTimeout(() => tw.add(0.45, (k) => anchor.scale.setScalar(Math.max(0.001, k)), { ease: (t) => ease.outBack(t, 2) }), i * 55);
    return v;
  }
  function setCards(list, preview) { ep++; cards = list; clearCards(); focusUid = null; if (!root) setTheme(def); list.forEach((c, i) => views.set(c.uid, makeCard(c, i, list.length))); layout(); }
  function worldOf(uid, y = 0.3) { const v = views.get(uid); if (!v) return null; const p = new THREE.Vector3(0, y, 0); v.anchor.localToWorld(p); return p; }
  const v3 = new THREE.Vector3();
  function center(uid) { const p = worldOf(uid); if (!p) return {}; v3.copy(p).project(camera); const b = S3.renderer.domElement.getBoundingClientRect(); return { x: Math.round(b.left + (v3.x * 0.5 + 0.5) * b.width), y: Math.round(b.top + (-v3.y * 0.5 + 0.5) * b.height) }; }
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  function pick(x, y) { if (presenting) return null; ndc.set((x / S3.w) * 2 - 1, -(y / S3.h) * 2 + 1); ray.setFromCamera(ndc, camera); const h = ray.intersectObjects(hits.filter((o) => { const v = views.get(o.userData.uid); return v && !v.gone; }), false); return h.length ? h[0].object.userData.uid : null; }

  // ---- throws (bezier arc from the hand to the target, same timing as before) ----
  const shots = [];
  function throwAt(uid, ammo, onHit) {
    const to = worldOf(uid); if (!to) { onHit && onHit(); return; }
    const from = new THREE.Vector3(); (heldRig && heldRig.userData.nozzle ? heldRig.userData.nozzle : camera).getWorldPosition(from);
    const n = ammo === "water" ? 10 : 1, grp = new THREE.Group(); for (let k = 0; k < n; k++) grp.add(projectile(ammo)); scene.add(grp);
    recoil = 1;
    let flash = null; if (ammo === "gun") { flash = new THREE.PointLight(0xffd06a, 6, 2.4); flash.position.copy(from); scene.add(flash); parts.burst(from, { n: 10, color: 0xffd06a, speed: 1.2, size: 0.05, life: 0.2, grav: 0 }); }
    shots.push({ from, to, ammo, t: 0, dur: AMMO_DUR[ammo] || 0.42, grp, flash, onHit, epoch: ep, done: false, uid });
  }
  function stepShots(dt) {
    for (let i = shots.length - 1; i >= 0; i--) {
      const s = shots[i]; s.t += dt; const Q = Math.min(1, s.t / s.dur), lift = s.ammo === "bow" || s.ammo === "gun" ? 0.03 : s.ammo === "water" ? 0.1 : 0.32;
      const mid = new THREE.Vector3((s.from.x + s.to.x) / 2, Math.max(s.from.y, s.to.y) + lift, (s.from.z + s.to.z) / 2);
      s.grp.children.forEach((G, k) => { const A = s.grp.children.length === 1 ? Q : clamp(Q * 1.15 - k * 0.07, 0, 1), U = 1 - A; G.visible = A > 0 && A < 1; G.position.set(U * U * s.from.x + 2 * U * A * mid.x + A * A * s.to.x, U * U * s.from.y + 2 * U * A * mid.y + A * A * s.to.y, U * U * s.from.z + 2 * U * A * mid.z + A * A * s.to.z); if (s.ammo === "bow") G.lookAt(s.to); else if (s.ammo === "axe") G.rotation.z += dt * 14; else if (s.ammo === "beanbags" || s.ammo === "parrot") G.rotation.x += dt * 9; });
      if (s.flash) s.flash.intensity = Math.max(0, s.flash.intensity - dt * 40);
      if (Q >= 1 && !s.done) { s.done = true; parts.burst(s.to, { n: 26, color: AMMO_COL[s.ammo] || 0xffffff, speed: 1.6, size: 0.06, life: 0.5, grav: -3, up: 0.6, low: S3.low }); if (s.epoch === ep && s.onHit) s.onHit(); }
      if (s.t > s.dur + 0.12) { scene.remove(s.grp); s.flash && scene.remove(s.flash); shots.splice(i, 1); }
    }
  }
  // bottom reveal strip from the original: the open pair (max 2) shown big; tap a sound card to hear it again
  const strip = document.createElement("div"); strip.className = "mm-reveal"; host.appendChild(strip);
  function stripSet() { strip.innerHTML = ""; const open = [...views.values()].filter((v) => v.target > 0.5 && !v.stripGone).sort((a, b) => a.openAt - b.openAt).slice(-2);
    for (const v of open) { const b = document.createElement("button"); b.type = "button"; b.className = "mm-tile" + (v.gone ? " ok" : "") + (v.shake > 0 ? " bad" : ""); const im = document.createElement("img"); im.alt = v.c.text || v.c.itemEn || ""; im.src = v.url || (v.url = faceCanvas(v.c, L.locale, v.im, false).image.toDataURL("image/png")); b.appendChild(im);
      b.addEventListener("click", (e) => { e.stopPropagation(); window.MRJMemoryMatch && window.MRJMemoryMatch.tap(v.c.uid); }); strip.appendChild(b); } }
  function flip(uid, on) { const v = views.get(uid); if (!v) return; v.target = on ? 1 : 0; if (on) { v.openAt = performance.now(); v.stripGone = false; } stripSet(); }
  function matched(uids, streak) {
    carnyMood = { kind: "hit", t: 0 };
    setTimeout(() => { uids.forEach((u) => { const v = views.get(u); if (v) v.stripGone = true; }); stripSet(); }, 900);
    uids.forEach((u, j) => { const v = views.get(u); if (!v) return; v.gone = true; v.faceMat.map && (v.faceMat.map = faceCanvas(v.c, L.locale, v.im, true)); v.faceMat.needsUpdate = true; const p = worldOf(u);
      parts.burst(p, { n: 40, colors: [0xffd23f, 0x3ddc84, 0xff5e7e, 0xffffff].map((c) => new THREE.Color(c)), speed: 2.2, size: 0.07, life: 0.9, grav: -4, up: 1.2, low: S3.low });
      const a = v.anchor, y0 = a.position.y, s0 = a.scale.x;
      setTimeout(() => tw.add(0.7, (k) => { a.position.y = y0 + ease.outCubic(k) * 0.5; a.rotation.y = k * Math.PI * 2 * (j ? 1 : -1); a.scale.setScalar(Math.max(0.001, s0 * (k < 0.3 ? 1 + k * 0.6 : (1.18 * (1 - k)) / 0.7))); }, { done: () => { a.visible = false; } }), 520); });
    const c = center(uids[1]), b = stage.canvas.getBoundingClientRect();
    if (c.x != null) fx.float(c.x - b.left, c.y - b.top - 30, streak >= 2 ? `MATCH ×${streak}` : "MATCH!", { color: "#ffe066", size: 32 });
    fx.flash("#fff7c2", 0.12);
    const pz = root && root.userData.prizes; pz && pz.forEach((o, i) => { const y0 = o.position.y; tw.add(0.5, (k) => (o.position.y = y0 + Math.sin(k * Math.PI) * 0.12), { done: () => (o.position.y = y0) }); });
  }
  function miss(uids) { carnyMood = { kind: "miss", t: 0 }; for (const u of uids) { const v = views.get(u); if (v) v.shake = 1; } shakeAmp = 0.03; stripSet(); }
  let shakeAmp = 0;
  function prize(big) {
    presenting = true; if (heldRig) heldRig.visible = false;
    const ann = root && root.userData.carny, P = portrait(), A0 = ann ? ann.position.clone() : new THREE.Vector3(), A1 = P ? new THREE.Vector3(-0.15, 0, 1.55) : new THREE.Vector3(-0.7, 0, 1.25);
    const pet = M["pet-" + PETS[((L.round || 1) - 1) % PETS.length]];
    prizeObj = new THREE.Group(); const plush = pet ? fit(pet.clone(true), big ? 0.75 : 0.55) : new THREE.Mesh(Sph(0.2), mat(0xffb8c8)); prizeObj.add(plush);
    if (big) { const cup = new THREE.Group(), gold = mat(0xffd24a, { metalness: 0.92, roughness: 0.18, emissive: 0x8a6a10, emissiveIntensity: 0.35 }); cup.add(mesh(Cyl(0.16, 0.08, 0.22, 20), gold, 0, 0.12), mesh(Cyl(0.03, 0.03, 0.12), gold, 0, -0.04), mesh(Cyl(0.1, 0.1, 0.04, 20), gold, 0, -0.1)); cup.position.set(0.42, 0, 0); prizeObj.add(cup); }
    scene.add(prizeObj); const po = prizeObj; // local: setTheme() may clear prizeObj while this tween still runs
    const end = new THREE.Vector3(0.05, P ? 1.45 : 1.55, P ? 2.15 : 2.35), arm = new THREE.Vector3();
    tw.add(big ? 1.25 : 0.95, (k) => { const b = ease.outCubic(Math.min(1, k / 0.45)); if (ann) { ann.position.lerpVectors(A0, A1, b); ann.userData.arm.rotation.x = -1.15 * b; ann.userData.arm.getWorldPosition(arm); } else arm.set(0, 1, 0); const q = ease.outCubic(Math.max(0, (k - 0.28) / 0.72)); po.position.lerpVectors(arm, end, q); po.rotation.y = k * Math.PI * 2; }, { ease: (t) => t });
    const cols = [0xc1121f, 0xf4d35e, 0x2ec4b6, 0xfff3ec, 0xff4d8d, 0x3d6bff].map((c) => new THREE.Color(c));
    setTimeout(() => { parts.burst(new THREE.Vector3(0, 2.4, 1.6), { n: big ? 160 : 90, colors: cols, speed: 2.4, size: 0.07, life: 2, grav: -2.5, up: 1.4, low: S3.low }); }, 400);
    fx.confetti(stage.w / 2, stage.h * 0.3, big ? 120 : 60);
  }

  function draw(dt) {
    S3.step(dt, () => {
      const t = S3.t; tw.update(dt); stepShots(dt);
      recoil = Math.max(0, recoil - dt * 3.2);
      if (heldRig) { const X = AMMO_POSE[def.ammo] || AMMO_POSE.beanbags; heldRig.position.set(X[0], X[1] + Math.sin(t * 1.8) * 0.006, X[2] + recoil * 0.07); heldRig.rotation.set(X[3] - recoil * 0.25, X[4], X[5]); heldRig.scale.setScalar(X[6]); }
      if (root) {
        const w = root.userData.water; if (w) w.position.y = 0.02 + Math.sin(t * 1.4) * 0.015;
        const bl = root.userData.bulbs; bl.forEach((b, i) => (b.material = (Math.floor(t * 3) + i) % 3 === 0 ? root.userData.bulbOff : root.userData.bulbOn));
        (root.userData.prizes || []).forEach((o, i) => (o.rotation.y = Math.sin(t * 0.8 + i) * 0.35));
        const H = root.userData.carny;
        if (H && !presenting) { H.position.y = (H.userData.baseY || 0) + Math.sin(t * 2.1) * 0.015; H.userData.head.rotation.z = Math.sin(t * 1.3) * 0.05; carnyMood.t += dt;
          if (carnyMood.kind === "hit") { H.userData.arm.rotation.z = -0.6 - Math.sin(carnyMood.t * 18) * 0.3; H.position.y += Math.abs(Math.sin(carnyMood.t * 10)) * 0.06; if (carnyMood.t > 0.7) carnyMood.kind = "idle"; }
          else if (carnyMood.kind === "miss") { H.userData.head.rotation.x = Math.sin(carnyMood.t * 16) * 0.08; if (carnyMood.t > 0.7) { carnyMood.kind = "idle"; H.userData.head.rotation.x = 0; } }
          else { H.userData.arm.rotation.z = Math.sin(t * 1.6) * 0.08; H.userData.arm.rotation.x = 0; } }
      }
      // cards: eased 3D flip (pivot rotates 180°), target knocked off / pops back, shake on miss, focus ring
      for (const v of views.values()) {
        v.flip += (v.target - v.flip) * (1 - Math.exp(-12 * dt));
        v.pivot.rotation.y = Math.PI * ease.inOut(clamp(v.flip, 0, 1));
        v.pivot.position.z = -0.03 + Math.sin(v.flip * Math.PI) * 0.12; // lifts toward you mid-flip
        if (v.shake > 0) { v.shake = Math.max(0, v.shake - dt * 2.5); v.anchor.rotation.z = Math.sin(t * 50) * 0.12 * v.shake; } else if (!v.gone) v.anchor.rotation.z = 0;
        const down = v.target > 0.5; v.tgDown += ((down ? 1 : 0) - v.tgDown) * (1 - Math.exp(-(down ? 9 : 7) * dt));
        const k = v.tgDown; v.tg.position.set(k * 0.12, 0.06 + Math.sin(k * Math.PI) * 0.32 - k * 0.15, 0.1 - k * 0.42); v.tg.rotation.set(-k * 2.6, 0, k * 1.2); v.tg.scale.setScalar(v.tgS * (1 - k * 0.6)); v.tg.visible = k < 0.95;
        v.ring.material.opacity = focusUid === v.c.uid && L.view === "play" ? 0.85 : 0; v.ring.rotation.z = t;
      }
      shakeAmp *= Math.pow(0.002, dt);
      camera.position.x = Math.sin(t * 0.3) * 0.02 + (Math.random() - 0.5) * shakeAmp; layoutCameraY(t);
      parts.update(dt);
    });
    // overlay: floating text + flashes
    const g = stage.g; g.clearRect(0, 0, stage.w, stage.h); fx.draw(g); fx.drawFlash(g, stage.w, stage.h);
  }
  function layoutCameraY(t) { const P = portrait(); camera.position.y = (P ? 1.18 : 1.32) + Math.sin(t * 0.45) * 0.01; camera.lookAt(0, 1.02, 0); }

  setTheme(def);
  return { stage3: S3, setTheme, setCards, throwAt, flip, matched, miss, prize, epoch: () => ep, pick, center, focus(u) { focusUid = u; }, draw, get low() { return S3.low; }, get quality() { return S3.quality; } };
}
