// Dummy data for charts
const chartData = {
  // Traffic overview (Line chart)
  trafficLabels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
  trafficNormal: [1200, 800, 3500, 5000, 4800, 6000, 3200],
  trafficMalicious: [50, 120, 80, 450, 200, 800, 150],

  // Threat levels (Doughnut chart)
  threatLabels: ['Low Risk', 'Medium Risk', 'High Risk', 'Critical'],
  threatValues: [65, 20, 10, 5],

  // Attack origins by country (Bar chart)
  countryLabels: ['Russia', 'China', 'Brazil', 'USA', 'India', 'Unknown'],
  countryValues: [4500, 3800, 2100, 1800, 1200, 885],

  // Attack Types (Pie chart)
  attackTypeLabels: ['SQL Injection', 'XSS', 'Brute Force', 'DDoS', 'Botnet'],
  attackTypeValues: [25, 15, 35, 15, 10],

  // Weekly trend (Area chart)
  weeklyLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  weeklyValues: [1500, 1800, 1200, 2500, 4200, 5800, 3000]
};
