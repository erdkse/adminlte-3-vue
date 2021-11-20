export default {
    toggleDarkMode: (state: any): void => {
        state.darkMode = !state.darkMode;
    },
    toggleMenuSidebar: (state: any): void => {
        state.menuSidebarCollapsed = !state.menuSidebarCollapsed;
    },
    toggleControlSidebar: (state: any): void => {
        state.controlSidebarCollapsed = !state.controlSidebarCollapsed;
    },
    setWindowSize: (state: any, payload: string): void => {
        state.screenSize = payload;
    }
};
