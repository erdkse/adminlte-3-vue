import { __awaiter, __decorate, __extends, __generator } from "tslib";
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, Vue } from 'vue-facing-decorator';
import Messages from './messages/messages.vue';
import Notifications from './notifications/notifications.vue';
import Languages from './languages/languages.vue';
import User from './user/user.vue';
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headerElement = null;
        return _this;
    }
    Header.prototype.mounted = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.headerElement = document.getElementById('main-header');
                return [2 /*return*/];
            });
        });
    };
    Header.prototype.onToggleMenuSidebar = function () {
        this.$store.dispatch('ui/toggleMenuSidebar');
    };
    Header.prototype.onToggleControlSidebar = function () {
        this.$store.dispatch('ui/toggleControlSidebar');
    };
    Object.defineProperty(Header.prototype, "darkModeSelected", {
        get: function () {
            return this.$store.getters['ui/darkModeSelected'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Header.prototype, "navbarVariant", {
        get: function () {
            return this.$store.getters['ui/navbarVariant'];
        },
        enumerable: false,
        configurable: true
    });
    Header = __decorate([
        Component({
            components: {
                'messages-dropdown': Messages,
                'notifications-dropdown': Notifications,
                'languages-dropdown': Languages,
                'user-dropdown': User
            }
        })
    ], Header);
    return Header;
}(Vue));
export default Header;
//# sourceMappingURL=header.js.map