import axios from './../utils/axios';

export default {
  getAuthUser() {
    return axios.get('/users/profile');
  }
};