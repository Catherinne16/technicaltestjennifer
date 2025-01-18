<template>
  <div>
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

// Registra los componentes de Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

// Define la propiedad directamente
const chartData = ref<any>([]); // Datos de ejemplo, cámbialos según tus necesidades
const chartOptions = ref({
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Variación del Precio del Dólar',
      font: {
        size: 18,
        weight: 'bold',
      },
      color: '#ff80ab',
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          return `Precio: ${context.raw} CLP`;
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Fecha',
      },
      grid: {
        display: true,
      },
    },
    y: {
      title: {
        display: true,
        text: 'Valor',
      },
      grid: {
        display: true,
      },
    },
  },
});

// Observa los cambios en los datos para actualizar el gráfico si es necesario
watch(chartData, (newData) => {
  console.log('Datos actualizados', newData);
});
</script>

<style scoped>
/* Estilos opcionales para el gráfico */
</style>
