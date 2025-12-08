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
