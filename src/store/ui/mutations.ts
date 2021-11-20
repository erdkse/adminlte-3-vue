export default {
    toggleDarkMode: (state: any): void => {
        state.darkMode = !state.darkMode;
    },
    toggleSidebarMenu: (state: any): void => {
        state.sidebarMenuCollapsed = !state.sidebarMenuCollapsed;
    },
    setWindowSize: (state: any, payload: string): void => {
        state.screenSize = payload;
    }
};
