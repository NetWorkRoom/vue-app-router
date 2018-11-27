import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './components/Hello.vue';
import Login from './components/Login.vue';

import StoriesPage from './components/StoriesPage.vue';
import StoriesEdit from './components/StoriesEdit.vue';
import Stories from './components/Stories.vue';
import Famous from './components/Famous.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  linkActiveClass: 'active-class',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/stories',
      component: StoriesPage,
      children: [
        {
          path: '/',
          name: 'stories.all',
          component: Stories,
        },
        {
          path: 'famous',
          name: 'stories.famous',
          alias: '/famous',
          component: Famous,
        },
        {
          path: ':id/edit',
          props: (route) => ({id: Number(route.params.id)}),
          name: 'stories.edit',
          component: StoriesEdit,
        },
      ],
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
