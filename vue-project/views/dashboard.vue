<template>
  <div class="dashboard-container">
    <h1>¡Bienvenido al dashboard!</h1>
    <h2>Tu centro de control de datos</h2>
   
    <div class="search-container">
      <label for="year">Selecciona el año:</label>
      <select id="year" v-model="selectedYear" @change="fetchDollarData">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
      <button @click="fetchDollarData" class="btn-search">
        <span class="icon">&#128269;</span> Buscar
      </button>
    </div>

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

    <RouterLink to="/" class="btn-back">Ir al Login</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import ApexCharts from 'vue3-apexcharts';
import axios from 'axios';

const selectedYear = ref(2024); 
const years = ref([2024, 2023, 2022, 2021, 2020, 2019]); 

const chartData = ref<number[]>([]);
const chartSeries = ref([{
  name: 'Precio del dólar',
  data: [],
}]);
const chartOptions = ref({
  chart: {
    type: 'line',
    background: 'transparent',
    color: '#555',
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
    text: 'Variación del dólar en los ultimos años:',
    align: 'center',
    style: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#131212',
    },
  },
  yaxis: {
    title: {
      text: 'Precio en USD',
      style: {
        color: '#131212',
      },
    },
  },
});

const fetchDollarData = async () => {
  try {
    const response = await axios.get(`https://api.boostr.cl/economy/indicator/dolar/${selectedYear.value}.json`, {
      headers: {
        accept: 'application/json',
      },
    });

    const data = response.data.data; 

    if (Array.isArray(data)) {
      const dates = data.map((item: { date: string }) => item.date);
      const prices = data.map((item: { value: number }) => item.value);

      chartData.value = prices;
      chartOptions.value.xaxis.categories = dates;
      chartSeries.value[0].data = prices;
    } else {
      console.error("La respuesta no contiene un array en la propiedad 'data'");
    }
  } catch (error) {
    console.error('Error al obtener datos del dólar:', error);
  }
};


// llamado a API
onMounted(fetchDollarData);
</script>

<style scoped>
.dashboard-container {
  max-width: 1200px; 
  margin: 50px auto; 
  padding: 60px; 
  background-color: rgba(218, 218, 230, 0.623); 
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1); 
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-size: 35px; 
  color: #2a27ec; 
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

p {
  font-size: 20px; 
  color: #131212; 
  margin-bottom: 40px;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px; 
  background-color: rgba(24, 23, 23, 0.95); 
  padding: 20px;
  border-radius: 10px;
}

label {
  font-size: 18px; 
  color: #007BFF; 
  margin-right: 15px;
}

select {
  padding: 10px 15px; 
  font-size: 18px;
  border: 2px solid #007BFF;
  border-radius: 10px;
  background-color: #fff;
  color: #333;
}

select:focus {
  outline: none;
  border-color: #0056b3; 
}

.btn-search {
  margin-left: 15px; 
  padding: 12px 20px; 
  background-color: #007BFF;
  color: rgb(255, 255, 255);
  border-radius: 10px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-search:hover {
  background-color: #0056b3; 
  transform: scale(1.05);
}

.btn-search .icon {
  margin-right: 8px; 
}

.btn-back {
  display: inline-block;
  padding: 14px 24px; 
  background-color: #007BFF;
  color: white;
  border-radius: 10px;
  font-size: 18px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-back:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.apexcharts-canvas {
  width: 100% !important;
  height: 400px !important; 
}

.apexcharts-tooltip {
  background: rgba(0, 123, 255, 0.9) !important;
  color: rgb(19, 18, 18) !important;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
}

.apexcharts-xaxis-label, .apexcharts-yaxis-label {
  font-family: 'Roboto', sans-serif;
  font-size: 14px; 
  fill: #333;
}
</style>
