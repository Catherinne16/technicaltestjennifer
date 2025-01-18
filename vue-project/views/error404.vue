<template>
  <div class="error-container">
    <h1 class="error-title">¡Oops!</h1>
    <p class="error-message">No podemos encontrar la página que buscas.</p>
    <RouterLink to="/" class="btn-home">Volver al inicio</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* Estilos generales */
.error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fce4ec; /* Rosa pastel suave */
  text-align: center;
  padding: 20px;
}

.error-title {
  font-size: 64px;
  font-weight: bold;
  color: #ff80ab; /* Rosa brillante */
  margin-bottom: 20px;
  letter-spacing: 1.5px;
}

.error-message {
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
}

.btn-home {
  display: inline-block;
  padding: 14px 28px;
  background-color: #ff80ab; /* Rosa brillante */
  color: white;
  font-size: 16px;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.btn-home:hover {
  background-color: #ff6090; /* Rosa más brillante */
}

</style>
