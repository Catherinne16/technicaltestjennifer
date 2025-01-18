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
  background: linear-gradient(135deg, #ff80ab, #fce4ec); /* Fondo degradado */
  text-align: center;
  padding: 20px;
}

.error-title {
  font-size: 72px;
  font-weight: bold;
  color: #ff3366; /* Color vibrante para el título */
  margin-bottom: 20px;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Sombra sutil para darle énfasis */
}

.error-message {
  font-size: 20px;
  color: #333; /* Color oscuro para mejorar contraste */
  margin-bottom: 30px;
}

.btn-home {
  display: inline-block;
  padding: 16px 32px;
  background-color: #ff3366; /* Color más intenso para el botón */
  color: white;
  font-size: 18px;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Agregado de sombra para efecto de elevación */
}

.btn-home:hover {
  background-color: #ff005c; /* Un tono más oscuro cuando se pasa el mouse */
  transform: scale(1.05); /* Le da un efecto de agrandado suave al pasar el mouse */
}

</style>
