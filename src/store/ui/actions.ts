export default {
    toggleSidebarMenu: (context: any): any => {
        context.commit('toggleSidebarMenu');
    },
    setWindowSize: (context: any, payload: string): void => {
        context.commit('setWindowSize', payload);
    }
};
