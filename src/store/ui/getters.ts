export default {
    darkModeSelected: (state: any): boolean => state.darkMode,
    menuSidebarCollapsed: (state: any): boolean => state.menuSidebarCollapsed,
    controlSidebarCollapsed: (state: any): boolean =>
        state.controlSidebarCollapsed,
    screenSize: (state: any): boolean => state.screenSize,
    navbarVariant: (state: any): string => state.navbarVariant,
    sidebarSkin: (state: any): string => state.sidebarSkin
};
