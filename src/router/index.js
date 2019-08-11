import Vue from 'vue';
import Router from 'vue-router';
import store from './../store';

import Main from './../pages/Main';
import Login from './../pages/Login';
import Register from './../pages/Register';

import Blank from './../pages/Blank';
import Dashboard from './../pages/Dashboard';

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
          next();
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
