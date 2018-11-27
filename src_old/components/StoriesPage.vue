<template>
  <div>
    <h4>Истории</h4>

    <hr>
    <!-- навигация -->
    <router-link :to="{name: 'stories.all'}" exact>Все</router-link> |
    <router-link :to="{name: 'stories.famous'}">Популярные</router-link>
    <!-- вывод маршрута -->
    <router-view />
  </div>
</template>
