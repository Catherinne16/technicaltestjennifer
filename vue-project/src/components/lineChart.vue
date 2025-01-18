// src/components/lineChart.vue
<template>
  <div>
    <!-- Solo renderizamos el gráfico si los datos están disponibles -->
    <LineChart v-if="chartData.labels.length > 0" :chart-data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs';
import { reactive, onMounted } from 'vue';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

export default {
  components: {
    LineChart: Line,
  },
  setup() {
    // Datos de ejemplo (deberías obtenerlos de tu API)
    const responseData = [
      { "date": "2021-03-02", "value": 721.2 },
      { "date": "2021-03-03", "value": 726.74 },
      { "date": "2021-03-04", "value": 731.3 },
      // Agrega más datos según sea necesario...
    ];

    // Formatear los datos para el gráfico
    const chartData = reactive({
      labels: [], // Inicializamos como un array vacío
      datasets: [
        {
          label: 'Valor del Dólar',
          data: [],
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1,
        },
      ],
    });

    // Opciones del gráfico
    const chartOptions = {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Fecha',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Valor',
          },
        },
      },
    };

    // Usamos onMounted para cargar los datos cuando el componente se haya montado
    onMounted(() => {
      // Simulamos la carga de datos (puedes reemplazarlo con la llamada real a la API)
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
/* Estilos adicionales para el gráfico */
</style>
