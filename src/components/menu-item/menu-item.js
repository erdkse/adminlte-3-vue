import { __decorate, __extends } from "tslib";
import { Component, Prop, Vue } from 'vue-facing-decorator';
var MenuItem = /** @class */ (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMenuExtended = false;
        _this.isExpandable = false;
        _this.isMainActive = false;
        _this.isOneOfChildrenActive = false;
        return _this;
    }
    MenuItem.prototype.mounted = function () {
        var _this = this;
        this.isExpandable =
            this.menuItem &&
                this.menuItem.children &&
                this.menuItem.children.length > 0;
        this.calculateIsActive(this.$router.currentRoute.value.path);
        this.$router.afterEach(function (to) {
            _this.calculateIsActive(to.path);
        });
    };
    MenuItem.prototype.handleMainMenuAction = function () {
        if (this.isExpandable) {
            this.toggleMenu();
            return;
        }
        this.$router.replace(this.menuItem.path);
    };
    MenuItem.prototype.toggleMenu = function () {
        this.isMenuExtended = !this.isMenuExtended;
    };
    MenuItem.prototype.calculateIsActive = function (url) {
        var _this = this;
        var _a;
        this.isMainActive = false;
        this.isOneOfChildrenActive = false;
        if (this.isExpandable) {
            this.menuItem.children.forEach(function (item) {
                if (item.path === url) {
                    _this.isOneOfChildrenActive = true;
                    _this.isMenuExtended = true;
                }
            });
        }
        else if (((_a = this.menuItem) === null || _a === void 0 ? void 0 : _a.path) === url) {
            this.isMainActive = true;
        }
        if (!this.isMainActive && !this.isOneOfChildrenActive) {
            this.isMenuExtended = false;
        }
    };
    __decorate([
        Prop()
    ], MenuItem.prototype, "menuItem", void 0);
    MenuItem = __decorate([
        Component({
            name: 'app-menu-item'
        })
    ], MenuItem);
    return MenuItem;
}(Vue));
export default MenuItem;
//# sourceMappingURL=menu-item.js.map