import {createStore} from 'vuex';
import authModule from './auth';
import uiModule from './ui';

export default createStore({
    modules: {
        auth: authModule,
        ui: uiModule
    }
});
