import { VFX } from 'https://esm.sh/@vfx-js/core';

const vfx = new VFX();
document.querySelectorAll('#batmobile-img').forEach((target) => {
  vfx.add(target, {
    shader: 'pixelate',
  });
});
