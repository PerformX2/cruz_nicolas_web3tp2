import { animate } from 'animejs';

export function animateTargetHit() {
  animate(':root', {
    '--target-hit-color': ['#505c7c', '#fdff00', '#fdff00', '#505c7c'],
    duration: 1200,
    easing: 'easeInOutQuad',
  });
}
