
const ctx = document.getElementById('pmChart').getContext('2d');
const pmChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({length: 30}, (_, i) => i + 1),
        datasets: [
            {
                label: 'Indoor PM 2.5',
                data: [12, 15, 14, 13, 12, 14, 16, 15, 13, 14, 13, 12, 15, 16, 14, 12, 11, 13, 14, 15, 13, 14, 15, 14, 13, 12, 13, 14, 15, 12],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Outdoor PM 2.5',
                data: [25, 22, 23, 24, 20, 21, 23, 24, 22, 23, 25, 26, 24, 22, 21, 20, 19, 21, 22, 23, 25, 24, 23, 22, 21, 20, 22, 23, 24, 25],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#fff'
                }
            }
        },
        scales: {
            x: {
                ticks: { color: '#fff' },
                grid: { color: '#444' }
            },
            y: {
                ticks: { color: '#fff' },
                grid: { color: '#444' }
            }
        }
    }
});
