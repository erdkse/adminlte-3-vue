import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { Component, Vue } from 'vue-facing-decorator';
import { DateTime } from 'luxon';
import { PfDropdown, PfImage } from '@profabric/vue-components';
import { GoogleProvider } from '@/utils/oidc-providers';
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(User.prototype, "authentication", {
        get: function () {
            return this.$store.getters['auth/authentication'];
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.$store.dispatch('auth/logout');
                        if (!this.authentication.profile.first_name) return [3 /*break*/, 2];
                        return [4 /*yield*/, GoogleProvider.signoutPopup()];
                    case 1:
                        _a.sent();
                        this.$store.dispatch('auth/setAuthentication', undefined);
                        this.$router.replace('/login');
                        return [3 /*break*/, 3];
                    case 2:
                        if (this.authentication.userID) {
                            FB.logout(function () {
                                _this.$store.dispatch('auth/setAuthentication', undefined);
                                _this.$router.replace('/login');
                            });
                        }
                        else {
                            this.$store.dispatch('auth/setAuthentication', undefined);
                            this.$router.replace('/login');
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(User.prototype, "readableCreatedAtDate", {
        get: function () {
            if (this.authentication && this.authentication.createdAt) {
                return DateTime.fromISO(this.authentication.createdAt).toFormat('dd LLLL yyyy');
            }
            return '';
        },
        enumerable: false,
        configurable: true
    });
    User = __decorate([
        Component({
            name: 'user-dropdown',
            components: {
                'pf-dropdown': PfDropdown,
                'pf-image': PfImage
            }
        })
    ], User);
    return User;
}(Vue));
export default User;
//# sourceMappingURL=user.js.map