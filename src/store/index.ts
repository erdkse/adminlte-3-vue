import {createStore} from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default createStore({
    state: {
        token: null,
        user: {
            email: 'mail@example.com',
            picture: null
        }
    },
    mutations,
    actions,
    getters,
    modules: {}
});
