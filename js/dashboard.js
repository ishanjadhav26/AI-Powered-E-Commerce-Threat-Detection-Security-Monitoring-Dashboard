document.addEventListener('DOMContentLoaded', () => {
  // Initialize Global Chart Defaults
  Chart.defaults.color = '#8888aa';
  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(10, 10, 18, 0.9)';
  Chart.defaults.plugins.tooltip.borderColor = 'rgba(0, 255, 204, 0.3)';
  Chart.defaults.plugins.tooltip.borderWidth = 1;

  // 1. Traffic Overview Line Chart
  const trafficCtx = document.getElementById('trafficChart').getContext('2d');
  new Chart(trafficCtx, {
    type: 'line',
    data: {
      labels: chartData.trafficLabels,
      datasets: [
        {
          label: 'Normal Traffic',
          data: chartData.trafficNormal,
          borderColor: '#00ffcc',
          backgroundColor: 'rgba(0, 255, 204, 0.1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        },
        {
          label: 'Malicious Traffic',
          data: chartData.trafficMalicious,
          borderColor: '#ff0055',
          backgroundColor: 'rgba(255, 0, 85, 0.1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' }
      },
      scales: {
        y: { grid: { color: 'rgba(255,255,255,0.05)' } },
        x: { grid: { color: 'rgba(255,255,255,0.05)' } }
      }
    }
  });

  // 2. Threat Levels Doughnut Chart
  const threatCtx = document.getElementById('threatChart').getContext('2d');
  new Chart(threatCtx, {
    type: 'doughnut',
    data: {
      labels: chartData.threatLabels,
      datasets: [{
        data: chartData.threatValues,
        backgroundColor: [
          '#33ff77', // Low
          '#ffcc00', // Medium
          '#ff6600', // High
          '#ff3333'  // Critical
        ],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });

  // Fake Live Counters Animation
  setInterval(() => {
    const attacksEl = document.getElementById('total-attacks-counter');
    if (attacksEl) {
      let current = parseInt(attacksEl.innerText.replace(/,/g, ''));
      current += Math.floor(Math.random() * 3);
      attacksEl.innerText = current.toLocaleString();
    }
  }, 3000);
});
