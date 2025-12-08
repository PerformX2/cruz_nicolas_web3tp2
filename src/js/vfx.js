//  Importation de module
import { VFX } from 'https://esm.sh/@vfx-js/core';

//  Initialisation de VFX
const vfx = new VFX();

// Boucle d'application de l'effet
// Sélectionne l'image de la batmobile.
document.querySelectorAll('#batmobile-img').forEach((target) => {
  // Ajoute l'effet visuel à l'élément.
  vfx.add(target, {
    // Applique le shader 'pixelate' (pixelisation).
    shader: 'pixelate',
  });
});
