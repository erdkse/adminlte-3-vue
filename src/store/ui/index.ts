import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const uiModule = {
    namespaced: true,
    state: {
        screenSize: 'lg',
        isSidebarMenuCollapsed: false
    },
    mutations,
    actions,
    getters
};

export default uiModule;
