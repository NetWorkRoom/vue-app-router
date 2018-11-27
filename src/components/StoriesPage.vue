<template>
  <div>
    <h2>Истории</h2>

    <hr>

    <!-- Сссылки для формирования меню в разделе Истории -->
    <router-link :to="{name: 'stories.all'}" exact>Все</router-link>
    |
    <router-link :to="{name: 'stories.famous'}">Популярные</router-link>

    <hr>

    <!-- Анимация при визуализации компонетов -->
    <transition enter-active-class="animated fadeIn" leave-class="animated fadeOut">
      <!-- Вывод активных маршрутов -->
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('Компонент StoriesPage');
  },
};
</script>
