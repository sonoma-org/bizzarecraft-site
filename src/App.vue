<template>
  <div>
    <header>
      <div class="logo"><a href="/"><img src="/public/icon.png"></a></div>
      <nav>
        <RouterLink to='/play'>Cборки</RouterLink>
        <a href="https://map.bizarrecraft.ru">Карта</a>
        <a href="https://wiki.bizarrecraft.ru/rules">Правила</a>
        <a href="https://wiki.bizarrecraft.ru">Вики</a>
      </nav>
      <button class="theme-toggle" @click="toggleTheme">
        <i :class="isLightTheme ? 'fas fa-moon' : 'fas fa-sun'"></i>
      </button>
    </header>
    <RouterView />
    <footer>
      <div class="footer-top">
        <div class="footer-links">
          <a href="https://sonoma.su">Создано группой Sonoma</a>
          <a>Обратная связь - support@sonoma.su</a>
        </div>
        <div class="footer-icons">
          <a href="https://github.com/sonoma-org/bizzarecraft-site"><i class="fab fa-github"></i></a>
          <a href="https://discord.gg/sEqEEchsQW"><i class="fab fa-discord"></i></a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Copyright ©2025 Sonoma</p>
        <p>Not an official Minecraft product. We are in no way affiliated with or endorsed by Mojang Synergies AB, Microsoft Corporation or other rightsholders.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLightTheme: false,
    };
  },
  methods: {
    toggleTheme() {
      this.isLightTheme = !this.isLightTheme;
      if (this.isLightTheme) {
        document.body.classList.add('light-theme');
      } else {
        document.body.classList.remove('light-theme');
      }
    },
  },
};
</script>

