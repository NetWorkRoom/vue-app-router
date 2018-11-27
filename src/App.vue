<template>
  <div class="content text-center">
    <img width="100" src="./assets/logo.png" alt="Logo">

    <h3>Пример работы Vue Router.</h3>

    <hr>

    <!-- Сссылки для формирования главного меню в приложении -->
    <router-link :to="{name: 'hello'}" exact>Главная</router-link>
    |
    <router-link :to="{name: 'login'}">Вход</router-link>
    |
    <router-link :to="{name: 'stories.all'}">Истории</router-link>

    <hr>

    <!-- Анимация при визуализации компонетов -->
    <transition enter-active-class="animated fadeInUp">
      <!-- Вывод активных маршрутов -->
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  .content {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 40px;
  }

  /* Перекрашиваем активные ссылки в зеленый цвет */
  .router-link-active {
    color: green;
    text-decoration: underline;
  }
</style>
