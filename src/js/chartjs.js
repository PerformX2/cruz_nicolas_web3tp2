import Chart from 'chart.js/auto';

/* RADAR CHART */
const radarCanvas = document.getElementById('radarChart');
let radarChart = null;
Chart.defaults.font.family = 'Quantico';

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
          backgroundColor: 'rgba(30, 30, 30, 0.2)',
          pointBackgroundColor: 'rgba(30, 30, 30, 1)',
          borderWidth: 0,
        },
        {
          label: 'Missile Load',
          data: [15, 23, 18, 29, 27, 3],
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
          data: [15, 18, 15, 21, 17, 6],
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
          data: [15, 18, 15, 21, 17, 6],
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
          ticks: { stepSize: 10, showLabelBackdrop: false },
        },
      },
    },
  });
}

/* POLAR AREA CHART*/
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

/* RANDOMIZE FUNCTION*/
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
