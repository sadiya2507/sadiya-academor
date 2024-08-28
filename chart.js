function displayForecast(data) {
    const labels = data.list.map(item => item.dt_txt);
    const temps = data.list.map(item => item.main.temp);
    const humidity = data.list.map(item => item.main.humidity);

    const ctx = document.getElementById('weatherChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: temps,
                    borderColor: 'red',
                    fill: false
                },
                {
                    label: 'Humidity (%)',
                    data: humidity,
                    borderColor: 'blue',
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true
                },
                y: {
                    display: true
                }
            }
        }
    });
}
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
