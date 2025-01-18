# 🚀 Proyecto Vue con TypeScript y Vite

Este proyecto es una **aplicación web** desarrollada con **Vue.js**, utilizando **TypeScript** para mejorar la escalabilidad y la mantenibilidad del código. Aprovechamos **Vite** para el bundling rápido y un entorno de desarrollo eficiente. La aplicación incluye visualización de datos interactiva con **ApexCharts** y **Chart.js**.

---

## 🛠️ **Tecnologías utilizadas:**

- **Vue 3**: Usamos la **Composition API** de Vue para estructurar de forma más eficiente los componentes.
- **TypeScript**: Implementamos **TypeScript** para mejorar la calidad del código con tipado estático.
- **Vite**: **Vite** para un bundling ultrarrápido y desarrollo en caliente.
- **Vue Router**: Para la gestión de rutas en la aplicación.
- **ApexCharts** y **Chart.js**: Bibliotecas para la visualización de datos interactiva.
- **Axios**: Para realizar peticiones HTTP y gestionar la comunicación con APIs.

---

## ⚙️ **Requisitos previos:**
Antes de comenzar, asegúrate de tener **Node.js** versión **16 o superior**. Puedes verificar la versión instalada con el siguiente comando:
```bash
node -v
Si no tienes Node.js instalado, puedes descargarlo desde aquí.

💻 Instalación y ejecución:
Clonar el repositorio:
Primero, clona este repositorio a tu máquina local:
bash
Copiar
Editar
git clone https://github.com/tu_usuario/tu_repositorio.git
cd tu_repositorio
Instalar las dependencias:
Luego, instala todas las dependencias necesarias con npm o yarn:
bash
Copiar
Editar
npm install
O si prefieres usar yarn:
bash
Copiar
Editar
yarn install
Ejecutar el servidor de desarrollo:
Para levantar el servidor y empezar a desarrollar, usa el siguiente comando:
bash
Copiar
Editar
npm run dev
O con yarn:
bash
Copiar
Editar
yarn dev
El servidor estará corriendo en http://localhost:5174 por defecto. Puedes acceder a la aplicación desde tu navegador.

Compilar para producción:
Si necesitas compilar el proyecto para producción, puedes usar:
bash
Copiar
Editar
npm run build

O con yarn:
bash
Copiar
Editar
yarn build

Ver la versión precompilada:
Si deseas ver la versión precompilada de la aplicación, puedes usar:
bash
Copiar
Editar
npm run serve
O con yarn:
bash
Copiar
Editar
yarn serve

🧑‍💻 Estructura del proyecto:
La estructura básica del proyecto es la siguiente:
bash
Copiar
Editar
src/
│
├── assets/          # Archivos estáticos como imágenes y fuentes
├── components/      # Componentes reutilizables
├── views/           # Vistas principales
├── router/          # Configuración de rutas de Vue Router
├── store/           # Gestión del estado global (si usas Vuex)
├── App.vue          # Componente raíz
└── main.ts          # Entrada principal, donde se inicia la aplicación
📝 Configuración y personalización:
La configuración principal de la aplicación se realiza en los archivos tsconfig.json y vite.config.ts.

tsconfig.json:
json
Copiar
Editar
{
  "compilerOptions": {
    "module": "es2020",  // Usa 'esnext' o 'es2020', 'es2022', 'node16' o 'nodenext'
    "moduleResolution": "node",
    "target": "esnext",   // O 'es2020' o superior
    "jsx": "preserve",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true,
    "types": ["vite/client", "vue"]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue"
  ]
}
Este archivo se usa para configurar las opciones del compilador TypeScript, asegurando que el proyecto funcione sin errores de tipo.

🔑 Dependencias principales:
Dev Dependencies:
@types/vue: Tipos de Vue para TypeScript.
@vue/tsconfig: Configuración recomendada para proyectos Vue con TypeScript.
TypeScript: Para usar el lenguaje con tipado estático.
Vite: Un bundler extremadamente rápido.

Dependencias:
ApexCharts: Para gráficos interactivos.
Axios: Para realizar peticiones HTTP.
Chart.js: Otra librería popular para la visualización de datos.
Vue Router: Para manejar rutas de la aplicación.

🧑‍💼 Acceso al proyecto:
Si necesitas usar este proyecto con credenciales específicas, puedes hacerlo usando las siguientes credenciales:
Usuario: emilys
Contraseña: emilyspass

🎨 Diseño del Proyecto:
Este proyecto está diseñado para ser responsivo y adaptable a diferentes tamaños de pantalla, asegurando una experiencia óptima en dispositivos móviles, tabletas y escritorios.
El Navbar tiene un color gris oscuro y se mantiene accesible en todo momento. El footer está diseñado con enlaces a las redes sociales, como GitHub y LinkedIn.

📈 Gráficos e interactividad:
Utilizamos ApexCharts y Chart.js para mostrar información dinámica sobre la variación de los precios del dólar, con visualizaciones interactivas y accesibles.

📞 Contacto:
Si necesitas ayuda o tienes preguntas, no dudes en contactarme:
GitHub: @Catherinne16
LinkedIn: Jennifer Díaz🧁

🎉¡Disfruta del proyecto!🎉




