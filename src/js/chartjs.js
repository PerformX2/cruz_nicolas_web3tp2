import Chart from 'chart.js/auto';

/* ============================================================
   RADAR CHART
============================================================ */
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
          data: [12, 23, 12, 36, 34, 1],
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
          pointBackgroundColor: 'rgba(160, 0, 0, 1)',
          borderWidth: 0,
        },
        {
          label: 'Missile Load',
          data: [15, 23, 18, 29, 27, 3],
          backgroundColor: 'rgba(150, 84, 54, 0.2)',
          pointBackgroundColor: 'rgba(255, 102, 0, 1)',
          borderWidth: 0,
        },
        {
          label: 'Missile Cadence',
          data: [15, 18, 15, 21, 17, 6],
          backgroundColor: 'rgba(128, 121, 30, 0.2)',
          pointBackgroundColor: 'rgba(229, 255, 0, 1)',
          borderWidth: 0,
        },
        {
          label: 'Missile Force',
          data: [15, 18, 15, 21, 17, 6],
          backgroundColor: 'rgba(36, 35, 119, 0.2)',
          pointBackgroundColor: 'rgba(0, 17, 255, 1)',
          borderWidth: 0,
        },
        {
          label: 'Missile Speed',
          data: [15, 18, 15, 21, 17, 6],
          backgroundColor: 'rgba(74, 40, 112, 0.2)',
          pointBackgroundColor: 'rgba(153, 0, 255, 1)',
          borderWidth: 0,
        },
        {
          label: 'Missile Temperature',
          data: [15, 18, 15, 21, 17, 6],
          backgroundColor: 'rgba(128, 30, 51, 0.2)',
          pointBackgroundColor: 'rgba(255, 0, 149, 1)',
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
          ticks: { stepSize: 10, showLabelBackdrop: false },
        },
      },
    },
  });
}

/* ============================================================
   POLAR AREA CHART
============================================================ */
const polarCanvas = document.getElementById('polarChart');
let polarChart = null;

if (polarCanvas) {
  polarChart = new Chart(polarCanvas, {
    type: 'polarArea',
    data: {
      labels: ['16–24', '25–34', '35–44', '45–54', '55–64', '65+'],
      datasets: [
        {
          data: [34, 27, 17, 15, 4, 3],
          backgroundColor: [
            'rgba(160, 0, 0, 1)',
            'rgba(255, 102, 0, 1)',
            'rgba(229, 255, 0, 1)',
            'rgba(0, 17, 255, 1)',
            'rgba(153, 0, 255, 1)',
            'rgba(255, 0, 149, 1)',
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

/* ============================================================
   RANDOMIZE FUNCTION
============================================================ */
function randomize(chart, max = 40, min = 10) {
  if (!chart) return;

  for (let ds of chart.data.datasets) {
    for (let i = 0; i < ds.data.length; i++) {
      ds.data[i] = Math.round(Math.random() * (max - min) + min);
    }
  }

  chart.update();
}

setInterval(() => {
  randomize(radarChart);
  randomize(polarChart, 30, 5);
}, 1000);
