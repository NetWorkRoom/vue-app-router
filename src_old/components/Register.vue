<template>
  <div id="login" class="text-center">
    <h2 class="mt-3">Регистрация</h2>
    <form class="form-signin">
      <div class="form-group">
        <input placeholder="Имя" class="form-control">
      </div>
      <div class="form-group">
        <input placeholder="Фамилия" class="form-control">
      </div>
      <div class="form-group">
        <input placeholder="Емаил" class="form-control">
      </div>
      <div class="form-group">
        <input placeholder="Пароль" class="form-control">
      </div>
      <div class="form-group">
        <input placeholder="Подтвердить пароль" class="form-control">
      </div>
      <button type="submit" class="btn btn-lg btn-primary btn-block">Зарегистрироваться</button>
    </form>
    <!-- Подключем в комопненте с формой регистрации, компонент популярных записей -->
    <famous :stories="stories"></famous>

  </div>
</template>

<script>
// Импортируем компонент Famous (Популярные записи)
import Famous from './Famous.vue';

export default {
  // Подключаем компонент Famous (Популярные записи)
  components: {
    Famous,
  },
  created() {
    console.log('регистрация');
  },
};
</script>

<style>
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
</style>
