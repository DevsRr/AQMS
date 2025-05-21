const ctx = document.getElementById('pmChart').getContext('2d');

const pmChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Hazardous Gas',
        data: [12, 15, 14, 13, 12, 14, 16, 15, 13, 14, 13, 12, 15, 16, 14, 12, 11, 13, 14, 15, 13, 14, 15, 14, 13, 12, 13, 14, 15, 12],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.3)',
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 5,
      },
      {
        label: 'Outdoor Dust',
        data: [25, 22, 23, 24, 20, 21, 23, 24, 22, 23, 25, 26, 24, 22, 21, 20, 19, 21, 22, 23, 25, 24, 23, 22, 21, 20, 22, 23, 24, 25],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 5,
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#fff' },
        grid: { color: '#444' },
      },
      y: {
        ticks: { color: '#fff' },
        grid: { color: '#444' },
      }
    }
  }
});

function updateProgress(circleId, textId, value, max, unit) {
  const circle = document.getElementById(circleId);
  const text = document.getElementById(textId);
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const val = Math.min(Math.max(value, 0), max);

  const offset = circumference - (val / max) * circumference;
  circle.style.strokeDashoffset = offset;

  let strokeColor = '#2ecc71';
  if (val > max * 0.75) strokeColor = '#e74c3c';
  else if (val > max * 0.5) strokeColor = '#f1c40f';

  circle.style.stroke = strokeColor;

  text.textContent = `${value} ${unit}`;
}

const dummyData = {
  pm25: 65, 
  mq135: 350,
  temp: 28, 
  humidity: 65
};

updateProgress('pm25Circle', 'pm25Text', dummyData.pm25, 100, 'µg/m³');
updateProgress('mq135Circle', 'mq135Text', dummyData.mq135, 500, 'ppm');
updateProgress('tempCircle', 'tempText', dummyData.temp, 50, '°C');
updateProgress('humidityCircle', 'humidityText', dummyData.humidity, 100, '%');
