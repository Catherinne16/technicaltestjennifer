<template>
  <div class="error-container">
    <h1 class="error-title">¡Vaya!</h1>
    <p class="error-message">La página que buscas no está disponible.</p>
    <RouterLink to="/" class="btn-home">Volver al inicio</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff80ab, #fce4ec); 
  text-align: center;
  padding: 20px;
}

.error-title {
  font-size: 72px;
  font-weight: bold;
  color: #ff3366; 
  margin-bottom: 20px;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
}

.error-message {
  font-size: 20px;
  color: #333; 
  margin-bottom: 30px;
}

.btn-home {
  display: inline-block;
  padding: 16px 32px;
  background-color: #ff3366; 
  color: white;
  font-size: 18px;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}

.btn-home:hover {
  background-color: #ff005c; 
  transform: scale(1.05); 
}

</style>
