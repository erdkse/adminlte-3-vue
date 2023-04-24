import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { Component, Vue } from 'vue-facing-decorator';
import Input from '@/components/input/input.vue';
import { useToast } from 'vue-toastification';
import { PfButton, PfCheckbox } from '@profabric/vue-components';
import { GoogleProvider, authLogin, facebookLogin } from '@/utils/oidc-providers';
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.appElement = null;
        _this.email = '';
        _this.password = '';
        _this.rememberMe = false;
        _this.isAuthLoading = false;
        _this.isFacebookLoading = false;
        _this.isGoogleLoading = false;
        _this.toast = useToast();
        return _this;
    }
    Login.prototype.mounted = function () {
        this.appElement = document.getElementById('app');
        this.appElement.classList.add('login-page');
    };
    Login.prototype.unmounted = function () {
        this.appElement.classList.remove('login-page');
    };
    Login.prototype.loginByAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.isAuthLoading = true;
                        return [4 /*yield*/, authLogin(this.email, this.password)];
                    case 1:
                        response = _a.sent();
                        this.$store.dispatch('auth/setAuthentication', response);
                        this.toast.success('Login succeeded');
                        this.isAuthLoading = false;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.toast.error(error_1.message);
                        this.isAuthLoading = false;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.loginByFacebook = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.isFacebookLoading = true;
                        return [4 /*yield*/, facebookLogin()];
                    case 1:
                        response = _a.sent();
                        this.$store.dispatch('auth/setAuthentication', response);
                        this.toast.success('Login succeeded');
                        this.isFacebookLoading = false;
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.toast.error(error_2.message);
                        this.isFacebookLoading = false;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.loginByGoogle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.isGoogleLoading = true;
                        return [4 /*yield*/, GoogleProvider.signinPopup()];
                    case 1:
                        response = _a.sent();
                        this.$store.dispatch('auth/setAuthentication', response);
                        this.toast.success('Login succeeded');
                        this.isGoogleLoading = false;
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.toast.error(error_3.message);
                        this.isGoogleLoading = false;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Login = __decorate([
        Component({
            components: {
                'app-input': Input,
                'pf-checkbox': PfCheckbox,
                'pf-button': PfButton
            }
        })
    ], Login);
    return Login;
}(Vue));
export default Login;
//# sourceMappingURL=login.js.map