//  Importations de modules
import * as Tone from 'https://esm.sh/tone@15.1.22';
import { animateTargetHit } from './anime.js';

// Configuration audio et initialisation des effets
const reverb = new Tone.Reverb({
  decay: 8,
  wet: 0.5,
}).toDestination();

const player = new Tone.Player('../assets/audio/sfx_shoot.mp3').connect(reverb);
player.load();

// Logique principale : Événement Clic sur le bouton de tir
document.querySelector('#shoot-btn').addEventListener('click', async () => {
  if (Tone.context.state !== 'running') {
    await Tone.start();
  }

  if (player.loaded) {
    player.start(0);

    setTimeout(() => {
      animateTargetHit();
    }, 3000);
  }
});
