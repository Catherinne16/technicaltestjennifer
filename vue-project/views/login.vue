<template>
  <div class="login-container">
    <header>
      <nav>
        <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
      </nav>
    </header>

    <div class="login-container">
      <h2>Iniciar sesión</h2>

      <form @submit.prevent="login">
        <div class="input-group">
          <label for="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            v-model="username"
            :class="{'input-error': usernameError}"
            required
          />
          <span v-if="usernameError" class="error-message">Por favor ingresa un nombre de usuario.</span>
        </div>

        <div class="input-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="password"
            :class="{'input-error': passwordError}"
            required
          />
          <span v-if="passwordError" class="error-message">Por favor ingresa tu contraseña.</span>
        </div>

        <button type="submit" class="btn-primary">Iniciar sesión</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const username = ref('');
const password = ref('');
const usernameError = ref(false);
const passwordError = ref(false);

const router = useRouter();

const login = async () => {
  usernameError.value = !username.value;
  passwordError.value = !password.value;

  if (usernameError.value || passwordError.value) return;

  // En esta sección, se solicitaba implementar una interfaz de inicio de sesión en la cual el usuario pudiera ingresar su correo electrónico y contraseña,
  // Sin embargo, la API de "dummyjson" utilizada en este caso requiere el parámetro "username" en lugar de "email"
  // El descubrimiento de este comportamiento inesperado se realizó al probar la API con Postman, lo que permitió identificar que la API requería 'username'.

  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username: username.value,
      password: password.value,
    });

    if (response.status === 200) {
      localStorage.setItem('authToken', response.data.accessToken);
      router.push('/dashboard');
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
};
</script>

<style scoped>
html, body {
  font-family: 'Roboto', sans-serif;
  background-color: #f7f7f7; 
  padding: 0;
  margin: 0;
  min-height: 100vh;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.nav-link {
  text-decoration: none;
  color: #1b0679; 
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #882cf0; 
}

.login-container {
  max-width: 380px;
  margin: 80px auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95); 
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  color: hsl(239, 92%, 49%); 
  font-size: 24px;
  margin-bottom: 30px;
  letter-spacing: 1px;
  font-weight: 600;
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  font-size: 14px;
  color: #2b2725; 
  display: block;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

input {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #f1f1f1;
  background: #fafafa;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: hsl(229, 88%, 47%);
  outline: none;
}

.input-error {
  border-color: #f44336;
}

.error-message {
  font-size: 12px;
  color: #f44336;
  margin-top: 6px;
}

button {
  width: 100%;
  padding: 14px;
  background-color: #153ae2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #5349d4; 
  transform: scale(1.02); 
}

button:focus {
  outline: none;
}
 
</style>