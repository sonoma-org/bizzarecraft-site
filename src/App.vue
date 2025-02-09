<script setup lang="ts">
</script>

<template>
   <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Приватный сервер BizarreCraft</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <nav class="navbar">
          <ul>
              <li><RouterLink to="/">Главная</RouterLink></li>
              <li><RouterLink to="/play">Играть</RouterLink></li>
              <li><a href="https://bizarrecraft.mc-map.handtruth.com/">Карта</a></li>
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
