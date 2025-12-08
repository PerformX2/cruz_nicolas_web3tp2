import Chart from 'chart.js/auto';

// Réglage de la police par défaut pour tous les graphiques
Chart.defaults.font.family = 'Quantico';

/* FONCTIONNALITÉ D'ALÉATOIRISATION */
function randomize(chart, max = 200, min = -10, offset = 0) {
  if (!chart) return;

  // Calcul de la plage : (max - min)
  const range = max - min;

  for (let ds of chart.data.datasets) {
    for (let i = 0; i < ds.data.length; i++) {
      // Génère un nombre aléatoire dans la plage [min + offset, max + offset]
      ds.data[i] = Math.round(Math.random() * range + min + offset);
    }
  }

  chart.update();
}

/* GRAPHIQUE RADAR */
const radarCanvas = document.getElementById('radarChart');
let radarChart = null;

if (radarCanvas) {
  radarChart = new Chart(radarCanvas, {
    type: 'radar',
    data: {
      labels: [
        'Reload Time',
        'Missile Load',
        'Missile Cadence',
        'Missile Force',
        'Missile Speed',
        'Missile Temperature',
      ],
      datasets: [
        {
          label: 'Reload Time',
          data: [120, 23, 12, 36, 34, 1],
          backgroundColor: 'rgba(30, 30, 30, 0.2)',
          pointBackgroundColor: 'rgba(30, 30, 30, 1)',
          borderWidth: 0,
        },
        {
          label: 'Missile Load',
          data: [15, 23, 18, 29, 199, 3],
          backgroundColor: 'rgba(60, 60, 60, 0.2)',
          pointBackgroundColor: 'rgba(60, 60, 60, 1)',
          borderWidth: 0,
        },
        {
          label: 'Missile Cadence',
          data: [15, 18, 15, 21, 17, 6],
          backgroundColor: 'rgba(90, 90, 90, 0.2)',
          pointBackgroundColor: 'rgba(90, 90, 90, 1)',
          borderWidth: 0,
        },
        {
          label: 'Missile Force',
          data: [199, 18, 15, 21, 199, 6],
          backgroundColor: 'rgba(120, 120, 120, 0.2)',
          pointBackgroundColor: 'rgba(120, 120, 120, 1)',
          borderWidth: 0,
        },
        {
          label: 'Missile Speed',
          data: [15, 18, 15, 21, 17, 6],
          backgroundColor: 'rgba(150, 150, 150, 0.2)',
          pointBackgroundColor: 'rgba(150, 150, 150, 1)',
          borderWidth: 0,
        },
        {
          label: 'Missile Temperature',
          data: [15, 18, 15, 21, 17, 199],
          backgroundColor: 'rgba(180, 180, 180, 0.2)',
          pointBackgroundColor: 'rgba(180, 180, 180, 1)',
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: { enabled: false },
        title: { display: true, text: 'ARMING MISSILE' },
      },
      scales: {
        r: {
          angleLines: { color: 'rgba(222,222,222,0.1)' },
          grid: { color: 'rgba(222,222,222,0.1)' },
          ticks: { stepSize: 25, showLabelBackdrop: false },
        },
      },
    },
  });
}

/* GRAPHIQUE À BARRES HORIZONTALES */
const barCanvas = document.getElementById('bar');
let barChart = null;

if (barCanvas) {
  barChart = new Chart(barCanvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Target 1', 'Target 2', 'Target 3', 'Target 4'],
      datasets: [
        {
          label: 'Temperature in ° Celcius',
          data: [0, 0, 0, 0],
          backgroundColor: ['#b4b4b4'],
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y', // Barres horizontales
      plugins: {
        title: {
          display: true,
          text: "TARGETS' SUPERFICIAL TEMPERATURE",
          padding: { top: 15, bottom: 10 },
        },
      },
      scales: {
        // Axe X = valeurs de température
        x: {
          beginAtZero: false,
          min: -100,
          max: 100,
          title: {
            display: true,
            text: 'left meaning lower and right meaning highest',
            padding: { top: 15 },
          },
          grid: {
            color: 'rgba(222, 222, 222, 0.1)',
            lineWidth: 1,
          },
          border: {
            color: 'rgba(222, 222, 222, 0.1)',
            width: 2,
            dash: [10, 10],
          },
          ticks: {
            display: true,
            maxTicksLimit: 6,
            mirror: false,
            z: 1,
            callback: (v) => v + '°',
          },
        },
        y: {
          ticks: {
            display: true,
            mirror: false,
          },
          grid: {
            color: 'rgba(222, 222, 222, 0.1)',
            lineWidth: 1,
          },
          border: {
            color: 'rgba(222, 222, 222, 0.1)',
            width: 2,
            dash: [10, 10],
          },
        },
      },
    },
  });
}

/* GRAPHIQUE À ZONE POLAIRE */
const polarCanvas = document.getElementById('polarChart');
let polarChart = null;

if (polarCanvas) {
  polarChart = new Chart(polarCanvas, {
    type: 'polarArea',
    data: {
      labels: ['16–24', '25–34', '35–44', '45–54', '55–64', '65+'],
      datasets: [
        {
          data: [100, 7, 37, 85, 4, 61],
          backgroundColor: [
            'rgba(30, 30, 30, 1)',
            'rgba(60, 60, 60, 1)',
            'rgba(90, 90, 90, 1)',
            'rgba(120, 120, 120, 1)',
            'rgba(150, 150, 150, 1)',
            'rgba(180, 180, 180, 1)',
          ],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'TARGETED OCCUPANTS AGE',
        },
      },
      scales: {
        r: {
          grid: { color: 'rgba(222,222,222,0.1)' },
          angleLines: { color: 'rgba(222,222,222,0.1)' },
          beginAtZero: true,
          ticks: { stepSize: 10, showLabelBackdrop: false },
        },
      },
    },
  });
}

/* MISE À JOUR EN TEMPS RÉEL */
setInterval(() => {
  randomize(radarChart);
  randomize(polarChart, 100, 5);

  // Graphique à barres : Plage [-100, 100]
  randomize(barChart, 200, 0, -100);
}, 1000);
