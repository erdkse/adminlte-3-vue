import Vue from 'vue';
import Vuex from 'vuex';
import router from './../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    authUser: null
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    SET_AUTH_USER(state, user) {
      state.authUser = user;
    },
    LOG_IN(state, token, user) {
      state.token = token;
      state.authUser = user;
      localStorage.setItem('token', token);
      router.push({ path: '/' });
    },
    LOG_OUT(state) {
      state.token = null;
      state.authUser = null;
      localStorage.removeItem('token');
      router.push({ path: '/login' });
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('SET_TOKEN', token);
    },
    setAuthUser({ commit }, user) {
      commit('SET_AUTH_USER', user);
    },
    logOut({ commit }) {
      commit('LOG_OUT');
    }
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    getAuthUser(state) {
      return state.authUser;
    }
  }
});