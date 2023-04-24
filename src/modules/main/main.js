import { __awaiter, __decorate, __extends, __generator } from "tslib";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Vue, Watch } from 'vue-facing-decorator';
import Header from './header/header.vue';
import MenuSidebar from './menu-sidebar/menu-sidebar.vue';
import ControlSidebar from './control-sidebar/control-sidebar.vue';
import Footer from './footer/footer.vue';
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.appElement = null;
        return _this;
    }
    Main.prototype.mounted = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.appElement = document.getElementById('app');
                this.appElement.classList.add('sidebar-mini');
                this.appElement.classList.add('layout-fixed');
                return [2 /*return*/];
            });
        });
    };
    Main.prototype.unmounted = function () {
        this.appElement.classList.remove('sidebar-mini');
        this.appElement.classList.remove('layout-fixed');
    };
    Main.prototype.toggleMenuSidebar = function () {
        this.$store.dispatch('ui/toggleMenuSidebar');
    };
    Main.prototype.watcher = function (newValue) {
        var darkModeSelected = newValue.darkModeSelected, menuSidebarCollapsed = newValue.menuSidebarCollapsed, controlSidebarCollapsed = newValue.controlSidebarCollapsed, screenSize = newValue.screenSize;
        if (!this.appElement) {
            return;
        }
        this.appElement.classList.remove('dark-mode');
        this.appElement.classList.remove('sidebar-closed');
        this.appElement.classList.remove('sidebar-collapse');
        this.appElement.classList.remove('sidebar-open');
        this.appElement.classList.remove('control-sidebar-slide-open');
        if (darkModeSelected) {
            this.appElement.classList.add('dark-mode');
        }
        if (!controlSidebarCollapsed) {
            this.appElement.classList.add('control-sidebar-slide-open');
        }
        if (menuSidebarCollapsed && screenSize === 'lg') {
            this.appElement.classList.add('sidebar-collapse');
        }
        else if (menuSidebarCollapsed && screenSize === 'xs') {
            this.appElement.classList.add('sidebar-open');
        }
        else if (!menuSidebarCollapsed && screenSize !== 'lg') {
            this.appElement.classList.add('sidebar-closed');
            this.appElement.classList.add('sidebar-collapse');
        }
    };
    Object.defineProperty(Main.prototype, "uiValues", {
        get: function () {
            return {
                darkModeSelected: this.$store.getters['ui/darkModeSelected'],
                menuSidebarCollapsed: this.$store.getters['ui/menuSidebarCollapsed'],
                controlSidebarCollapsed: this.$store.getters['ui/controlSidebarCollapsed'],
                screenSize: this.$store.getters['ui/screenSize']
            };
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Watch('uiValues')
    ], Main.prototype, "watcher", null);
    Main = __decorate([
        Component({
            components: {
                'app-header': Header,
                'menu-sidebar': MenuSidebar,
                'control-sidebar': ControlSidebar,
                'app-footer': Footer
            }
        })
    ], Main);
    return Main;
}(Vue));
export default Main;
//# sourceMappingURL=main.js.map