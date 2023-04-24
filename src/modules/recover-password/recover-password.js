import { __decorate, __extends } from "tslib";
import { Component, Vue } from 'vue-facing-decorator';
import Input from '@/components/input/input.vue';
import { useToast } from 'vue-toastification';
import { PfButton } from '@profabric/vue-components';
var RecoverPassword = /** @class */ (function (_super) {
    __extends(RecoverPassword, _super);
    function RecoverPassword() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.appElement = null;
        _this.password = '';
        _this.confirmPassword = '';
        _this.toast = useToast();
        return _this;
    }
    RecoverPassword.prototype.mounted = function () {
        this.appElement = document.getElementById('app');
        this.appElement.classList.add('login-page');
    };
    RecoverPassword.prototype.unmounted = function () {
        this.appElement.classList.remove('login-page');
    };
    RecoverPassword = __decorate([
        Component({
            components: {
                'app-input': Input,
                'pf-button': PfButton
            }
        })
    ], RecoverPassword);
    return RecoverPassword;
}(Vue));
export default RecoverPassword;
//# sourceMappingURL=recover-password.js.map