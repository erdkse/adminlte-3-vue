import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import {calculateWindowSize} from '@/utils/helpers';

const uiModule = {
    namespaced: true,
    state: {
        darkMode: false,
        sidebarMenuCollapsed: false,
        screenSize: calculateWindowSize(window.innerWidth)
    },
    mutations,
    actions,
    getters
};

export default uiModule;
