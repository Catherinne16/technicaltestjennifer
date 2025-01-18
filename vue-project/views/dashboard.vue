<template>
  <div class="dashboard-container">
    <h1>Bienvenido al Dashboard</h1>
    <p>Observa la variación del precio del dólar.</p>

    <!-- Selector de año y botón de búsqueda con lupa -->
    <div class="search-container">
      <label for="year">Selecciona el año:</label>
      <select id="year" v-model="selectedYear" @change="fetchDollarData">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
      <button @click="fetchDollarData" class="btn-search">
        <span class="icon">&#128269;</span> Buscar
      </button>
    </div>

    <!-- Gráfico de líneas -->
    <div v-if="chartData.length > 0">
      <apexchart
        type="line"
        :options="chartOptions"
        :series="chartSeries"
        height="350"
      />
    </div>
    <div v-else>
      <p>Cargando datos...</p>
    </div>

    <!-- Botón de regreso -->
    <RouterLink to="/" class="btn-back">Ir al Login</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import ApexCharts from 'vue3-apexcharts'; // Importar el componente ApexCharts
import axios from 'axios';

// Datos y estado del componente
const selectedYear = ref(2024); // Año inicial por defecto
const years = ref([2024, 2023, 2022, 2021, 2020]); // Lista de años disponibles

// Datos para el gráfico
const chartData = ref<number[]>([]);
const chartSeries = ref([{
  name: 'Precio del dólar',
  data: [],
}]);
const chartOptions = ref({
  chart: {
    type: 'line',
    background: 'transparent',
  },
  xaxis: {
    categories: [],
    title: {
      text: 'Fechas',
      style: {
        color: '#555',
      },
    },
  },
  title: {
    text: 'Variación del precio del dólar',
    align: 'center',
    style: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#ff80ab',
    },
  },
  yaxis: {
    title: {
      text: 'Precio en USD',
      style: {
        color: '#555',
      },
    },
  },
});

// Función para obtener los datos del dólar
const fetchDollarData = async () => {
  try {
    const response = await axios.get(`https://api.boostr.cl/economy/indicator/dolar/${selectedYear.value}.json`, {
      headers: {
        accept: 'application/json',
      },
    });

    // Procesar los datos obtenidos
    const data = response.data;
    const dates = Object.keys(data); // Fechas
    const prices = Object.values(data); // Precios

    // Actualizar el gráfico
    chartData.value = prices;
    chartOptions.value.xaxis.categories = dates;
    chartSeries.value[0].data = prices;
  } catch (error) {
    console.error('Error al obtener datos del dólar:', error);
  }
};

// Llamar a la API al montar el componente
onMounted(fetchDollarData);
</script>

<style scoped>
.dashboard-container {
  max-width: 800px;
  margin: 100px auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 28px;
  color: #ff80ab;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

p {
  font-size: 18px;
  color: #555;
  margin-bottom: 40px;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

label {
  font-size: 16px;
  margin-right: 10px;
}

select {
  padding: 8px 12px;
  font-size: 16px;
  border: 2px solid #ff80ab;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
}

select:focus {
  outline: none;
  border-color: #ff6090;
}

.btn-search {
  margin-left: 10px;
  padding: 10px 15px;
  background-color: #ff80ab;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
}

.btn-search .icon {
  margin-right: 5px;
}

.btn-back {
  display: inline-block;
  padding: 12px 20px;
  background-color: #ff80ab;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn-back:hover {
  background-color: #ff6090;
}
</style>
