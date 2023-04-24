import { __decorate, __extends } from "tslib";
import { Component, Vue } from 'vue-facing-decorator';
import { PfDropdown } from '@profabric/vue-components';
var Languages = /** @class */ (function (_super) {
    __extends(Languages, _super);
    function Languages() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectedLanguage = null;
        _this.languages = [
            {
                key: 'en',
                flag: 'flag-icon-us',
                label: 'languages.english'
            },
            {
                key: 'de',
                flag: 'flag-icon-de',
                label: 'languages.german'
            },
            {
                key: 'fr',
                flag: 'flag-icon-fr',
                label: 'languages.french'
            },
            {
                key: 'es',
                flag: 'flag-icon-es',
                label: 'languages.spanish'
            },
            {
                key: 'tr',
                flag: 'flag-icon-tr',
                label: 'languages.turkish'
            }
        ];
        return _this;
    }
    Languages.prototype.mounted = function () {
        this.selectedLanguage = this.$i18n.locale;
    };
    Object.defineProperty(Languages.prototype, "flagIcon", {
        get: function () {
            if (this.selectedLanguage === 'de') {
                return 'flag-icon-de';
            }
            if (this.selectedLanguage === 'fr') {
                return 'flag-icon-fr';
            }
            if (this.selectedLanguage === 'es') {
                return 'flag-icon-es';
            }
            return 'flag-icon-us';
        },
        enumerable: false,
        configurable: true
    });
    Languages.prototype.changeLanguage = function (langCode) {
        if (this.$i18n.locale !== langCode) {
            this.$i18n.locale = langCode;
            this.selectedLanguage = langCode;
        }
    };
    Languages = __decorate([
        Component({
            name: 'languages-dropdown',
            components: {
                'pf-dropdown': PfDropdown
            }
        })
    ], Languages);
    return Languages;
}(Vue));
export default Languages;
//# sourceMappingURL=languages.js.map