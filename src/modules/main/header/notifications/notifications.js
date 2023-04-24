import { __decorate, __extends } from "tslib";
import { Component, Vue } from 'vue-facing-decorator';
import { PfDropdown } from '@profabric/vue-components';
var Notifications = /** @class */ (function (_super) {
    __extends(Notifications, _super);
    function Notifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Notifications = __decorate([
        Component({
            name: 'notifications-dropdown',
            components: {
                'pf-dropdown': PfDropdown
            }
        })
    ], Notifications);
    return Notifications;
}(Vue));
export default Notifications;
//# sourceMappingURL=notifications.js.map