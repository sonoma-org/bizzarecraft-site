<script setup lang="ts">
</script>

<template>
  <body>
    <nav class="navbar">
          <ul>
              <li><RouterLink to="/">Главная</RouterLink></li>
              <li><RouterLink to="/map">Карта</RouterLink></li>
              <li><RouterLink to="/seasons">Сезоны</RouterLink></li>
              <img src="/public/bc2.png" width="50">
              <li><RouterLink to="/rules">Правила</RouterLink></li>
              <li><a href="https://discord.gg/GqfzJPSQHk">Discord</a></li>
              <li><a href="https://github.com/sonoma-org/bizzarecraft-site">GitHub</a></li>
          </ul>
    </nav>
    <main>
      <RouterView />
    </main>
      <footer class="footer">
        <p style="font-size: small;">Not an official Minecraft product. We are in no way affiliated with or endorsed by Mojang Synergies AB, Microsoft Corporation or other rightsholders.</p>
          <p style="font-size: small;">&copy; 2025 <a href="https://sonoma.su">Sonoma Org.</a></p>
      </footer>
  </body>
</template>
