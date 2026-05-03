// Simulated Data for the application
const simulatedData = {
  totalAttacks: 14285,
  failedLogins: 3842,
  activeThreats: 87,
  riskScore: 78,
  
  // Real-time activity feed
  recentActivity: [
    { type: 'login_fail', user: 'admin@shop.com', ip: '192.168.1.45', time: 'Just now', location: 'Russia' },
    { type: 'sql_inject', user: 'unknown', ip: '45.22.11.99', time: '2 mins ago', location: 'China' },
    { type: 'bot_traffic', user: 'N/A', ip: 'Multiple', time: '5 mins ago', location: 'Unknown' },
    { type: 'payment_fraud', user: 'john.doe@email.com', ip: '10.0.0.5', time: '12 mins ago', location: 'Brazil' },
  ]
};

// Fake Notifications System
const notificationMessages = [
  { title: "Brute Force Detected", message: "Multiple failed logins from IP 185.22.XX.XX", type: "critical" },
  { title: "Botnet Traffic Spike", message: "Unusual traffic spike detected on checkout page.", type: "warning" },
  { title: "New Vulnerability Scan", message: "Automated scanner blocked on /api/v1/users", type: "info" },
  { title: "Payment Fraud Alert", message: "Suspicious transaction blocked ($4,500).", type: "critical" },
  { title: "DDoS Mitigation Active", message: "Traffic scrubbed from 50+ malicious IPs.", type: "warning" }
];

function triggerRandomNotification() {
  const container = document.getElementById('notification-container');
  if (!container) return;

  const notif = notificationMessages[Math.floor(Math.random() * notificationMessages.length)];
  
  const el = document.createElement('div');
  el.className = `notification ${notif.type}`;
  
  let icon = 'fa-info-circle';
  if(notif.type === 'critical') icon = 'fa-exclamation-triangle';
  if(notif.type === 'warning') icon = 'fa-shield-virus';

  el.innerHTML = `
    <div class="notification-icon"><i class="fas ${icon}"></i></div>
    <div class="notification-content">
      <h4>${notif.title}</h4>
      <p>${notif.message}</p>
    </div>
  `;

  container.appendChild(el);

  // Remove after 5 seconds
  setTimeout(() => {
    el.style.animation = 'fade-out 0.4s forwards ease-in';
    setTimeout(() => el.remove(), 400);
  }, 5000);
}

// Start notification loop if container exists
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Sidebar Toggle (Implementation if needed)
  
  // Random notifications every 8-15 seconds
  if (document.getElementById('notification-container')) {
    setInterval(triggerRandomNotification, Math.random() * 7000 + 8000);
  }
});
