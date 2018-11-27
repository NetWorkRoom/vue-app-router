<template>
  <div class="content">
    <div id="nav">
      <router-link :to="{ name: 'home'}" active-class="active-class" exact>Главная</router-link> |
      <router-link :to="{ name: 'login'}">Логин</router-link> |
      <router-link :to="{ name: 'stories.all'}">Истории</router-link>
    </div>

    <hr>

    <router-view />
  </div>
</template>

<style>
.content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active-class {
  color: green;
}
</style>
