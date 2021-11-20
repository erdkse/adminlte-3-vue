export default {
    toggleDarkMode: (context: any): any => {
        context.commit('toggleDarkMode');
    },
    toggleSidebarMenu: (context: any): any => {
        context.commit('toggleSidebarMenu');
    },
    setWindowSize: (context: any, payload: string): void => {
        context.commit('setWindowSize', payload);
    }
};
