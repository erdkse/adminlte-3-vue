import axios from './../utils/axios';
import store from './../store';
import router from './../router';
import swal from 'sweetalert';

import userController from './user.controller';

/* eslint-disable */

export default {
  logIn(data) {
    axios
      .post('/auth/login', {
        email: data.email,
        password: data.password
      })
      .then(response => {
        store.dispatch('setToken', response.data.token);
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + store.getters.getToken;

        userController
          .getAuthUser()
          .then(response => {
            store.dispatch('setAuthUser', response.data);
            router.push('/');
          })
          .catch(e => e);
      })
      .catch(e => {
        console.log('error', e);

        swal({
          title: 'Hata',
          text: 'Giriş başarısız',
          icon: 'error'
        }).then(response => {});
      });
  }
};
