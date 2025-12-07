import * as Tone from 'https://esm.sh/tone@15.1.22';

// Création de l'effet de Réverbération (Reverb)
const reverb = new Tone.Reverb({
  // 'decay' (temps de réverbération): 5 secondes par défaut.
  // 'wet' (mélange sec/mouillé): 0.5 signifie 50% de son avec réverb.
  decay: 10,
  wet: 0.5,
}).toDestination(); // La réverbération est connectée à la sortie principale

// Le Player est connecté à l'effet 'reverb' au lieu de la destination finale.
const player = new Tone.Player('../assets/audio/sfx_shoot.mp3').connect(reverb);

player.load();

document.querySelector('#shoot-btn').addEventListener('click', async () => {
  // Démarrer le contexte audio au premier clic
  if (Tone.context.state !== 'running') {
    await Tone.start();
    console.log('Contexte audio démarré.');
  }

  if (player.loaded) {
    // Redémarre le son depuis le début (0) pour les clics répétés
    player.start(0);
  } else {
    console.warn("Le son n'est pas encore chargé. Veuillez patienter.");
  }
});

// Définir les chemins pour les sons
const MANUAL_AUTO_URL = '../assets/audio/sfx_manual_auto.mp3';

// Créer le Player pour le son de mode manuel/auto
const manualAutoPlayer = new Tone.Player({
  url: MANUAL_AUTO_URL,
  autostart: false,
  loop: false,
}).toDestination(); // Connecter directement à la sortie

// Précharger l'audio pour une réponse instantanée
manualAutoPlayer.load();

// Laisser la fonction playSound simple pour la réutilisation
export function playManualAutoSound() {
  if (Tone.context.state !== 'running') {
    Tone.start();
  }
  if (manualAutoPlayer.loaded) {
    manualAutoPlayer.start(0);
  }
}
