<template>
  <div id="login" class="text-center">
    <h2 class="mt-4">Вход</h2>
    <form class="form-signin">
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Введите емаил">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Введите пароль">
      </div>
      <button type="submit" class="btn btn-lg btn-primary btn-block">Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  created() {
    console.log('логин');
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
