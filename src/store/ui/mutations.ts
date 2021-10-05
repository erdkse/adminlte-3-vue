export default {
    toggleSidebarMenu: (state: any): void => {
        state.isSidebarMenuCollapsed = !state.isSidebarMenuCollapsed;
    },
    setWindowSize: (state: any, payload: string): void => {
        state.screenSize = payload;
    }
};
