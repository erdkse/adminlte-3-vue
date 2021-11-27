export default {
    toggleDarkMode: (context: any): any => {
        context.commit('toggleDarkMode');
    },
    toggleMenuSidebar: (context: any): any => {
        context.commit('toggleMenuSidebar');
    },
    toggleControlSidebar: (context: any): any => {
        context.commit('toggleControlSidebar');
    },
    setWindowSize: (context: any, payload: string): void => {
        context.commit('setWindowSize', payload);
    },
    setNavbarVariant: (context: any, payload: string): void => {
        context.commit('setNavbarVariant', payload);
    },
    setSidebarSkin: (context: any, payload: string): void => {
        context.commit('setSidebarSkin', payload);
    }
};
