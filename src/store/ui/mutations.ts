import {
    NAVBAR_DARK_VARIANTS,
    NAVBAR_LIGHT_VARIANTS,
    SIDEBAR_LIGHT_SKINS
} from '@/utils/themes';

export default {
    toggleDarkMode: (state: any): void => {
        state.darkMode = !state.darkMode;
        if (state.darkMode) {
            state.navbarVariant = NAVBAR_DARK_VARIANTS[0].value;
        } else {
            state.navbarVariant = NAVBAR_LIGHT_VARIANTS[0].value;
        }
    },
    toggleMenuSidebar: (state: any): void => {
        state.menuSidebarCollapsed = !state.menuSidebarCollapsed;
    },
    toggleControlSidebar: (state: any): void => {
        state.controlSidebarCollapsed = !state.controlSidebarCollapsed;
    },
    setWindowSize: (state: any, payload: string): void => {
        state.screenSize = payload;
    },
    setNavbarVariant: (state: any, payload: string): void => {
        state.navbarVariant =
            payload ||
            (state.darkMode
                ? NAVBAR_DARK_VARIANTS[0].value
                : NAVBAR_LIGHT_VARIANTS[0].value);
    },
    setSidebarSkin: (state: any, payload: string): void => {
        state.sidebarSkin = payload || SIDEBAR_LIGHT_SKINS[0].value;
    }
};
