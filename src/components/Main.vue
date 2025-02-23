<template>

    <section class="main-title">
      <h1>BizarreCraft</h1>
      <p>Особенный Vanilla+ сервер, <br>который обязательно тебе понравится! </p>
      <button @click="$router.push('mc')">Играть</button>
    </section>

    <section class="pricing">
      <h2>Варианты проходок</h2>
      <p>Все возможные доступные варианты проходок</p>
      <div class="options">
        <div class="card">
          <h3>Staff</h3>
          <p>Станьте нашим модератором</p>
          <p>Мы активно набираем команду модераторов!</p>
          <p>Нужен Vanilla</p>
          <button onclick="location.href='https://discord.gg/sEqEEchsQW'">Написать нам</button>
        </div>
        <div class="card highlight">
          <h3>Vanilla</h3>
          <p>Free / Сезон</p>
          <p>Доступ на Сервер</p>
          <p>Действует 1 сезон</p>
          <p>Бесплатная проходка на первый сезон!</p>
          <button onclick="location.href='https://discord.gg/sEqEEchsQW'">Оставить заявку</button>
        </div>
        <div class="card">
          <h3>Creative</h3>
          <p>₽100+ / Сезон</p>
          <p>Поддержите нас и получите</p>
          <p>Доступ к креативному миру и его возможностям!</p>
          <p>Нужен Vanilla</p>
          <button onclick="toastr.error('В разработке')">Поддержать</button>
        </div>
      </div>
    </section>
</template>