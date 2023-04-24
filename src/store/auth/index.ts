import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import {IAuthModule} from '@/interfaces/state';

const authModule: IAuthModule = {
    namespaced: true,
    state: {
        authentication: undefined
    },
    mutations,
    actions,
    getters
};

export default authModule;
