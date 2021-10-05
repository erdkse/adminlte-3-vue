import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const uiModule = {
    namespaced: true,
    state: {
        isSidebarMenuCollapsed: false,
        screenSize: 'lg'
    },
    mutations,
    actions,
    getters
};

export default uiModule;
