document.addEventListener('DOMContentLoaded', () => {
  // Global defaults
  Chart.defaults.color = '#8888aa';
  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(10, 10, 18, 0.9)';
  Chart.defaults.plugins.tooltip.borderColor = 'rgba(0, 255, 204, 0.3)';
  Chart.defaults.plugins.tooltip.borderWidth = 1;

  // 1. Weekly Area Chart
  const weeklyCtx = document.getElementById('weeklyAreaChart').getContext('2d');
  
  // Create gradient
  let gradient = weeklyCtx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(0, 255, 204, 0.5)');
  gradient.addColorStop(1, 'rgba(0, 255, 204, 0.0)');

  new Chart(weeklyCtx, {
    type: 'line',
    data: {
      labels: chartData.weeklyLabels,
      datasets: [{
        label: 'Total Attacks Blocked',
        data: chartData.weeklyValues,
        borderColor: '#00ffcc',
        backgroundColor: gradient,
        borderWidth: 2,
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { grid: { color: 'rgba(255,255,255,0.05)' } },
        x: { grid: { color: 'rgba(255,255,255,0.05)' } }
      }
    }
  });

  // 2. Country Bar Chart
  const countryCtx = document.getElementById('countryBarChart').getContext('2d');
  new Chart(countryCtx, {
    type: 'bar',
    data: {
      labels: chartData.countryLabels,
      datasets: [{
        label: 'Attack Count',
        data: chartData.countryValues,
        backgroundColor: 'rgba(255, 0, 85, 0.7)',
        borderColor: '#ff0055',
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { grid: { color: 'rgba(255,255,255,0.05)' } },
        x: { grid: { display: false } }
      }
    }
  });

  // 3. Attack Types Pie Chart
  const typeCtx = document.getElementById('attackTypePieChart').getContext('2d');
  new Chart(typeCtx, {
    type: 'pie',
    data: {
      labels: chartData.attackTypeLabels,
      datasets: [{
        data: chartData.attackTypeValues,
        backgroundColor: [
          '#ff3333', // SQLi
          '#ffcc00', // XSS
          '#33ff77', // Brute Force
          '#00ffcc', // DDoS
          '#aa00ff'  // Botnet
        ],
        borderWidth: 0,
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'right' }
      }
    }
  });
});
