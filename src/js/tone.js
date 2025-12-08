import * as Tone from 'https://esm.sh/tone@15.1.22';
import { animateTargetHit } from './anime.js';

// Reverb effect
const reverb = new Tone.Reverb({
  decay: 8,
  wet: 0.5,
}).toDestination();

const player = new Tone.Player('../assets/audio/sfx_shoot.mp3').connect(reverb);
player.load();

document.querySelector('#shoot-btn').addEventListener('click', async () => {
  if (Tone.context.state !== 'running') {
    await Tone.start();
  }

  if (player.loaded) {
    player.start(0);

    // Wait 5 seconds before color animation
    setTimeout(() => {
      animateTargetHit();
    }, 4500);
  }
});
