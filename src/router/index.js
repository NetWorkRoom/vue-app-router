/* eslint-disable import/extensions */
import Vue from 'vue';

// Импортируем библиотеку маршрутизации
import VueRouter from 'vue-router';

// Подключаем компонеты приложения
import Hello from '@/components/Hello';
import Login from '@/components/Login';
import StoriesPage from '@/components/StoriesPage';
import StoriesAll from '@/components/StoriesAll.vue';
import StoriesFamous from '@/components/StoriesFamous.vue';
import StoriesEdit from '@/components/StoriesEdit.vue';

// Подключаем библиотеку Vue Router
Vue.use(VueRouter);

// Создаем массив объектов маршрутизации с указанием путей и подключенных по ним компонентов
const routes = [
  {
    path: '/',
    name: 'hello',
    component: Hello,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/stories',
    component: StoriesPage,
    children: [ // Создаем вложенные роуты
      {
        path: '/',
        name: 'stories.all',
        component: StoriesAll,
      },
      {
        path: 'famous',
        name: 'stories.famous',
        alias: '/famous',
        component: StoriesFamous,
      },
      {
        path: ':id/edit',
        // Передаем значение в компонент редактирования записи
        props: route => ({ id: Number(route.params.id) }),
        name: 'stories.edit',
        component: StoriesEdit,
      },
    ],
  },
];

// Создаем и экспортируем экземпляр маршрутизатора
export default new VueRouter({
  mode: 'history', // Включаем мод 'history', убирает # из командной строки браузера
  base: '/', // Устанавливаем значение начальной позиции для всех путей
  routes,
});
