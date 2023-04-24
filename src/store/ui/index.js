import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import { calculateWindowSize } from '@/utils/helpers';
var uiModule = {
    namespaced: true,
    state: {
        darkMode: false,
        navbarVariant: 'navbar-light',
        sidebarSkin: 'sidebar-dark-primary',
        menuSidebarCollapsed: false,
        controlSidebarCollapsed: true,
        screenSize: calculateWindowSize(window.innerWidth)
    },
    mutations: mutations,
    actions: actions,
    getters: getters
};
export default uiModule;
//# sourceMappingURL=index.js.map