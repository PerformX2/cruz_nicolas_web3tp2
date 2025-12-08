// Importation de module
import { animate } from 'animejs';

//  Définition de la fonction d'animation
export function animateTargetHit() {
  // Déclenchement de l'animation
  animate(':root', {
    // Séquence de couleurs pour la variable CSS personnalisée
    '--target-hit-color': ['#505c7c', '#fdff00', '#fdff00', '#505c7c'],
    // Durée de l'animation en millisecondes
    duration: 1200,
    // Courbe d'accélération et de décélération
    easing: 'easeInOutQuad',
  });
}
