export default {
    toggleDarkMode: function (context) {
        context.commit('toggleDarkMode');
    },
    toggleMenuSidebar: function (context) {
        context.commit('toggleMenuSidebar');
    },
    toggleControlSidebar: function (context) {
        context.commit('toggleControlSidebar');
    },
    setWindowSize: function (context, payload) {
        context.commit('setWindowSize', payload);
    },
    setNavbarVariant: function (context, payload) {
        context.commit('setNavbarVariant', payload);
    },
    setSidebarSkin: function (context, payload) {
        context.commit('setSidebarSkin', payload);
    }
};
//# sourceMappingURL=actions.js.map