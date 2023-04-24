import { __decorate, __extends } from "tslib";
import { Component, Vue } from 'vue-facing-decorator';
import { PfDropdown, PfImage } from '@profabric/vue-components';
var Messages = /** @class */ (function (_super) {
    __extends(Messages, _super);
    function Messages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Messages = __decorate([
        Component({
            name: 'messages-dropdown',
            components: {
                'pf-dropdown': PfDropdown,
                'pf-image': PfImage
            }
        })
    ], Messages);
    return Messages;
}(Vue));
export default Messages;
//# sourceMappingURL=messages.js.map