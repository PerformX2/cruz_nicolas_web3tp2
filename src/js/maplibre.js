import maplibregl from 'https://esm.sh/maplibre-gl@5.13.0';

const longitude = -74.0111069;
const latitude = 40.7041139;

const carte = new maplibregl.Map({
  container: 'carte',
  style: 'https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json',
  center: [longitude, latitude],
  zoom: 15.5,
  pitch: 60,
  bearing: 0,
});

carte.on('style.load', () => {
  // Ici on trouve la couche avec les labels pour que le texte s'affiche par dessus les bâtiments.
  const layers = carte.getStyle().layers;
  let labelLayerId = null;
  for (const layer of layers) {
    if (layer.type === 'symbol' && layer.layout && layer.layout['text-field']) {
      labelLayerId = layer.id;
      break;
    }
  }

  // Chargement des données pour les bâtiments
  carte.addSource('openfreemap', {
    url: 'https://tiles.openfreemap.org/planet',
    type: 'vector',
  });

  // Couche 3D sur la carte
  carte.addLayer(
    {
      id: '3d-buildings',
      source: 'openfreemap',
      'source-layer': 'building',
      type: 'fill-extrusion',
      minzoom: 15,
      paint: {
        // La couleur d'un bâtiment dépend de sa hauteur
        'fill-extrusion-color': [
          'interpolate',
          ['linear'],
          ['get', 'render_height'],
          0, // Petits bâtiments
          '#000',
          200, // Bâtiments moyens
          '#999',
          400, // Bâtiments très hauts
          '#f00',
        ],

        // La hauteur d'un bâtiment dépend du zoom
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          16,
          ['get', 'render_height'],
        ],

        // La transparence d'un bâtiment
        'fill-extrusion-opacity': 0.9,
      },
    },
    labelLayerId || undefined
  );
});

let secondsPerRevolution = 50;
let startTime = null;
function rotateCamera(timestamp) {
  if (!startTime) startTime = timestamp;
  const elapsedSeconds = (timestamp - startTime) / 1000;
  const bearing = (elapsedSeconds / secondsPerRevolution) * 360;
  carte.setBearing(bearing % 360);
  requestAnimationFrame(rotateCamera);
}
rotateCamera(0);
