<template>

    <section class="pricing">
      <section class="main-title">
        <h1>Сборки</h1>
      </section>
      <p>Для игры на нашем сервер необходимы моды<br>
      Здесь ты можешь скачать уже готовые сборки под нужный тебе загрузчик!<br>
      Все моды проверены и взяты с официальный источников
      </p>
      <div class="options">
        <div class="card">
          <h3>NeoForge</h3>
          <p>Новый форк Forge</p>
          <p>Оптимизирована Sodium</p>
          <p>Все фишки OptiFine уже есть!</p>
          <button onclick="toastr.error('В разработке')">Скачать</button>
        </div>
        <div class="card highlight">
          <h3>Fabric</h3>
          <p>Предпочтительный вариант</p>
          <p>Оптимизирована Sodium</p>
          <p>Стоят абсолютно все нужные моды!</p>
          <button onclick="location.href='https://nextcloud.sonoma.su/s/byzWrRgCZoSnZ68/download/BizarreCraft%20%28Fabric%29.zip'">Скачать</button>
        </div>
        <div class="card">
          <h3>Quilt</h3>
          <p>Легкий форк Fabric</p>
          <p>Оптимизирована Sodium</p>
          <p>Нужные тебе моды уже есть!</p>
          <button onclick="toastr.error('В разработке')">Скачать</button>
        </div>
      </div>
      <br>
      <details>
        <summary>Или скачай нужные моды самостоятельно тут</summary>
        <a href="https://modrinth.com/plugin/simple-voice-chat">Simple Voice Chat</a> <br>
        <a href="https://modrinth.com/plugin/emotecraft">EmoteCraft</a> <br>
        <a href="https://modrinth.com/mod/voicechat-soundboard">Voice Chat Soundboard</a> <br>
        <a href="https://modrinth.com/mod/cpmsvcc">CPM Simple Voice Chat compat</a> <br>
        <a href="https://modrinth.com/plugin/custom-player-models">Customizable Player Models</a> <br>
        <a href="https://modrinth.com/mod/my_totem_doll">My Totem Doll</a> <br>
      </details>

    </section>
</template>