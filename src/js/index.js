function randomDistance() {
  return Math.floor(Math.random() * 100001); // De 0 à 100000
}

function updateDistance() {
  const el = document.querySelector('.distance-text');
  const randomValue = randomDistance();
  el.textContent = "TARGETS' DISTANCE : " + randomValue + ' m';
}

// Mise à jour toutes les 2 secondes
setInterval(updateDistance, 2000);

// Exécuter une fois au chargement
updateDistance();

// Charger effets sonores
const sfxSwitch = new Audio('./assets/audio/sfx_manual_auto.mp3');
const sfxExplosion = new Audio('./assets/audio/sfx_explosion.mp3');

// Références des boutons
const switchBtn = document.getElementById('switch-btn');
const explodeBtn = document.getElementById('explode-btn');

// Jouer le son lorsque le bouton SWITCH est cliqué
switchBtn.addEventListener('click', () => {
  sfxSwitch.currentTime = 0; // redémarrer le son
  sfxSwitch.play();
});

// Jouer le son lorsque le bouton EXPLODE est cliqué
explodeBtn.addEventListener('click', () => {
  sfxExplosion.currentTime = 0;
  sfxExplosion.play();
});
