<template>
  <div id="app">
    <router-view></router-view>  

    <footer class="footer-container">
      <div class="footer-content">
        <p>Jennifer Diaz &copy;2025 </p>
        <div class="footer-links">
          <a
            href="https://www.linkedin.com/in/jennifer-k-diaz/"
            target="_blank"
            class="footer-icon"
            aria-label="LinkedIn"
          >
          <i class="fa-brands fa-linkedin"></i> 
        </a>
          <a
            href="https://github.com/Catherinne16"
            target="_blank"
            class="footer-icon"
            aria-label="GitHub"
          >
          <i class="fa-brands fa-github-alt"></i> 
        </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  background-image: url('https://images.pexels.com/photos/29406887/pexels-photo-29406887/free-photo-of-majestic-snow-covered-mountains-by-atlantic-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  font-family: 'Arial', sans-serif;
  color: #f8f9fa;
}

.footer-container {
  background-color: hsl(220, 6%, 10%); 
  color: #ffffff;
  text-align: center;
  position: relative;
  width: 100%;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.footer-links {
  display: flex;
  gap: 15px;
  margin-bottom: 1%;
}

.footer-icon {
  font-size: 24px;
  color: #ffffff;
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease;
  border-radius: 50%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
}

.footer-icon:hover {
  transform: scale(1.2);
  color: hsl(200, 7%, 18%);
  background: rgba(255, 255, 255, 0.4);
}
</style>
