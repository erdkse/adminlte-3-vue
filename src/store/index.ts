import {createStore} from 'vuex';
import authModule from './authModule';
import uiModule from './uiModule';

export default createStore({
    modules: {
        auth: authModule,
        ui: uiModule
    }
});
