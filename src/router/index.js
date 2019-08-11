import Vue from 'vue';
import Router from 'vue-router';

import Main from './../components/pages/Main.vue';
import Login from './../components/pages/Login.vue';
import Register from './../components/pages/Register';

import Blank from './../components/pages/Blank.vue';
import Dashboard from './../components/pages/Dashboard.vue';
import store from './../store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      beforeEnter(to, from, next) {
        if (store.state.token) {
          next();
        } else {
          next('/login');
        }
      },
      children: [
        { path: '/blank', component: Blank },
        { path: '/', component: Dashboard }
      ]
    },
    {
      path: '/login',
      component: Login,
      beforeEnter(to, from, next) {
        if (store.state.token) {
          next('/');
        } else {
          next();
        }
      }
    },
    {
      path: '/register',
      component: Register,
      beforeEnter(to, from, next) {
        if (store.state.token) {
          next('/');
        } else {
          next();
        }
      }
    }
  ]
});
