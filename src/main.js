import Vue from 'vue';
import App from './App.vue';
// Ипортируем для подключения фал маршрутизатора
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router, // Поключаем маршрутизатор к приложению
  render: h => h(App),
}).$mount('#app');
