<template>
  <div class="chart-container">
    <LineChart v-if="chartData.labels.length > 0" :chart-data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs';
import { reactive, onMounted } from 'vue';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

export default {
  components: {
    LineChart: Line,
  },
  setup() {
    const responseData = [
      { "date": "2021-03-02", "value": 721.2 },
      { "date": "2021-03-03", "value": 726.74 },
      { "date": "2021-03-04", "value": 731.3 },
    ];

    const chartData = reactive({
      labels: [], 
      datasets: [
        {
          label: 'Valor del Dólar',
          data: [],
          fill: false,
          borderColor: 'rgba(0, 123, 255, 1)', 
          tension: 0.2,
          borderWidth: 2, 
          pointBackgroundColor: 'rgba(173, 216, 230, 1)', 
        },
      ],
    });

    const chartOptions = {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Fecha',
            color: '#dfe6e9', 
            font: {
              size: 14,
              family: 'Arial, sans-serif',
              weight: 'bold',
            },
          },
          grid: {
            color: 'rgba(223, 230, 233, 0.3)', 
          },
        },
        y: {
          title: {
            display: true,
            text: 'Valor (USD)',
            color: '#dfe6e9', 
            font: {
              size: 14,
              family: 'Arial, sans-serif',
              weight: 'bold',
            },
          },
          grid: {
            color: 'rgba(223, 230, 233, 0.3)', 
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: '#dfe6e9', 
            font: {
              size: 12,
              family: 'Arial, sans-serif',
            },
          },
        },
        tooltip: {
          backgroundColor: 'rgba(0, 123, 255, 0.8)',
          titleColor: '#fff', 
          bodyColor: '#fff', 
          borderColor: '#007bff', 
          borderWidth: 1,
        },
      },
    };

    onMounted(() => {
      chartData.labels = responseData.map(item => item.date);
      chartData.datasets[0].data = responseData.map(item => item.value);
    });

    return {
      chartData,
      chartOptions,
    };
  },
};
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: 500px; 
  background: rgba(255, 255, 255, 0.8); 
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); 
}

canvas {
  border-radius: 8px; 
}

h1 {
  font-family: 'Arial', sans-serif;
  color: #007bff; 
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
</style>
