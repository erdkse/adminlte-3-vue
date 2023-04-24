import { __decorate, __extends } from "tslib";
import { Component, Prop, Vue } from 'vue-facing-decorator';
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.onValueChange = function (event) {
        this.$emit('update:modelValue', event.target.value);
    };
    __decorate([
        Prop()
    ], Input.prototype, "modelValue", void 0);
    __decorate([
        Prop()
    ], Input.prototype, "icon", void 0);
    __decorate([
        Prop()
    ], Input.prototype, "type", void 0);
    __decorate([
        Prop()
    ], Input.prototype, "placeholder", void 0);
    __decorate([
        Prop()
    ], Input.prototype, "autocomplete", void 0);
    Input = __decorate([
        Component({
            name: 'app-input',
            emits: ['update:modelValue']
        })
    ], Input);
    return Input;
}(Vue));
export default Input;
//# sourceMappingURL=input.js.map