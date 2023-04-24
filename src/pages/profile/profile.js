import { __decorate, __extends } from "tslib";
import { PfImage } from '@profabric/vue-components';
import { Component, Vue } from 'vue-facing-decorator';
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeTab = 'ACTIVITY';
        return _this;
    }
    Profile.prototype.setActiveTab = function (tab) {
        this.activeTab = tab;
    };
    Profile = __decorate([
        Component({
            name: 'app-profile',
            components: {
                'pf-image': PfImage
            }
        })
    ], Profile);
    return Profile;
}(Vue));
export default Profile;
//# sourceMappingURL=profile.js.map