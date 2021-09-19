import {createStore} from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default createStore({
    state: {
        token: localStorage.getItem('gatekeeper_token'),
        user: null
    },
    mutations,
    actions,
    getters,
    modules: {}
});
