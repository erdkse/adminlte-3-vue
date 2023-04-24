import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { calculateWindowSize } from '@/utils/helpers';
import { Component, Vue, Watch } from 'vue-facing-decorator';
import { useWindowSize } from '@vueuse/core';
import { GoogleProvider, getFacebookLoginStatus } from '@/utils/oidc-providers';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAppLoading = true;
        return _this;
    }
    App.prototype.mounted = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkSession()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.checkSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            var responses, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all([
                                getFacebookLoginStatus(),
                                GoogleProvider.getUser()
                            ])];
                    case 1:
                        responses = _a.sent();
                        responses = responses.filter(function (r) { return Boolean(r); });
                        console.log('responses', responses);
                        if (responses && responses.length > 0) {
                            this.$store.dispatch('auth/setAuthentication', responses[0]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log('error', error_1);
                        return [3 /*break*/, 3];
                    case 3:
                        this.isAppLoading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.watchWindowSize = function (newValue) {
        if (this.$store.getters['ui/screenSize'] !== newValue) {
            this.$store.dispatch('ui/setWindowSize', newValue);
        }
    };
    Object.defineProperty(App.prototype, "windowSize", {
        get: function () {
            var width = useWindowSize().width;
            return calculateWindowSize(width.value);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Watch('windowSize')
    ], App.prototype, "watchWindowSize", null);
    App = __decorate([
        Component({})
    ], App);
    return App;
}(Vue));
export default App;
//# sourceMappingURL=app.js.map