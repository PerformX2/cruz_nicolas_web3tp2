import Zdog from 'zdog';

// COULEURS DE LA PALETTE JAUNE
const BRIGHT_COLOR = '#fdff00'; // Jaune Vif (Centre)
const DIM_COLOR = '#988829'; // Jaune Diminué (Orbite)

// CONFIGURATION GLOBALE

const ORBITER_COUNT = 9; // 9 sphères en orbite
const DOME_DIAMETER = 25;
const ORBIT_RADIUS = 50; // Rayon de l'orbite

// DIMENSIONS (Hauteur augmentée)
const ZDOG_CANVAS_WIDTH = 500; // Largeur originale
const ZDOG_CANVAS_HEIGHT = 800; // Hauteur

// Initialiser l'Illusion (l'espace 3D)
const illo = new Zdog.Illustration({
  element: '#zdog-canvas',
  width: ZDOG_CANVAS_WIDTH,
  height: ZDOG_CANVAS_HEIGHT, // Utilise la nouvelle hauteur
  rotate: true,
  dragRotate: true,
});

// CRÉATION DE LA SPHÈRE CENTRALE (BRILLANTE)

new Zdog.Shape({
  addTo: illo,
  stroke: DOME_DIAMETER,
  color: BRIGHT_COLOR,
  translate: { z: 0 }, // Au centre de la scène
});

// CRÉATION DU GROUPE D'ORBITE

// Cet Anchor sert de point pivot pour la rotation des 9 autres sphères
const orbiterGroup = new Zdog.Anchor({
  addTo: illo,
});

// CRÉATION DES 9 SPHÈRES EN ORBITE (DIMINUÉES)

for (let i = 0; i < ORBITER_COUNT; i++) {
  // Calculer l'angle pour répartir les 9 sphères uniformément (0 à 2π)
  const angle = i * (Zdog.TAU / ORBITER_COUNT); // Calculer la position X et Y sur le cercle d'orbite

  const xPos = Math.cos(angle) * ORBIT_RADIUS;
  const yPos = Math.sin(angle) * ORBIT_RADIUS;

  new Zdog.Shape({
    addTo: orbiterGroup, // Ajouté au groupe pour qu'elles tournent ensemble
    stroke: DOME_DIAMETER,
    color: DIM_COLOR, // Toujours la couleur diminuée
    translate: { x: xPos, y: yPos }, // Ajout d'une légère inclinaison individuelle pour un effet 3D
  });
}

// FONCTION D'ANIMATION

function animate() {
  // Rotation du groupe d'orbite pour faire tourner les sphères autour du centre
  orbiterGroup.rotate.z += 0.01; // Rotation du groupe d'orbite
  illo.rotate.x += 0.008; // Rotation globale de l'illustration

  illo.updateRenderGraph();

  requestAnimationFrame(animate);
}

// Lancer l'animation
animate();
