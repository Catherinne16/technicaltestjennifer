import { createApp } from 'vue';
import App from './App.vue';
import VueApexCharts from 'vue3-apexcharts';
import router from './router'; // Asegúrate de importar el archivo de rutas

const app = createApp(App);
app.use(VueApexCharts);
app.use(router); // Usar Vue Router para gestionar rutas

app.mount('#app');
