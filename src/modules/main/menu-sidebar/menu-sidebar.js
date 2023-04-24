import { __decorate, __extends } from "tslib";
import { Component, Vue } from 'vue-facing-decorator';
import MenuItem from '@/components/menu-item/menu-item.vue';
import { PfImage } from '@profabric/vue-components';
import SidebarSearch from '@/components/sidebar-search/sidebar-search.vue';
import { i18n } from '@/translation';
var MenuSidebar = /** @class */ (function (_super) {
    __extends(MenuSidebar, _super);
    function MenuSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menu = MENU;
        return _this;
    }
    Object.defineProperty(MenuSidebar.prototype, "authentication", {
        get: function () {
            return this.$store.getters['auth/authentication'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MenuSidebar.prototype, "sidebarSkin", {
        get: function () {
            return this.$store.getters['ui/sidebarSkin'];
        },
        enumerable: false,
        configurable: true
    });
    MenuSidebar = __decorate([
        Component({
            name: 'app-menu-sidebar',
            components: {
                'app-menu-item': MenuItem,
                'app-sidebar-search': SidebarSearch,
                'pf-image': PfImage
            }
        })
    ], MenuSidebar);
    return MenuSidebar;
}(Vue));
export default MenuSidebar;
export var MENU = [
    {
        name: i18n.global.t('labels.dashboard'),
        path: '/'
    },
    {
        name: i18n.global.t('labels.blank'),
        path: '/blank'
    },
    {
        name: i18n.global.t('labels.mainMenu'),
        children: [
            {
                name: i18n.global.t('labels.subMenu'),
                path: '/sub-menu-1'
            },
            {
                name: i18n.global.t('labels.blank'),
                path: '/sub-menu-2'
            }
        ]
    }
];
//# sourceMappingURL=menu-sidebar.js.map