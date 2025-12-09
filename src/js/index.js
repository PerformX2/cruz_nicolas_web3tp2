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
const sfxSwitch = new Audio('./assets/audio/sfx_switch.mp3');
const sfxExplosion = new Audio('./assets/audio/sfx_explosion.mp3');

// Références des boutons
const switchBtn = document.getElementById('switch-btn');
const explodeBtn = document.getElementById('explode-btn');

// Joue le son lorsque le bouton SWITCH est cliqué
switchBtn.addEventListener('click', () => {
  sfxSwitch.currentTime = 0; // redémarrer le son
  sfxSwitch.play();
});

// Joue le son lorsque le bouton EXPLODE est cliqué
explodeBtn.addEventListener('click', () => {
  sfxExplosion.currentTime = 0;
  sfxExplosion.play();
});

document.addEventListener('DOMContentLoaded', () => {
  const musique = document.getElementById('background-music');
  const boutonToggle = document.getElementById('music-toggle-button');
  let estEnLecture = false; // Suivre l'état actuel de la musique

  // Ajoute l'écouteur d'événement 'click' au bouton
  boutonToggle.addEventListener('click', () => {
    if (estEnLecture) {
      // Si la musique est en lecture, la mettre en pause
      musique.pause();
      boutonToggle.textContent = 'Play music';
      estEnLecture = false;
    } else {
      // Si la musique est en pause, appuyer sur le bouton pour l'écouter
      musique.play().then(() => {
        boutonToggle.textContent = 'Pause music';
        estEnLecture = true;
      });
    }
  });
});
