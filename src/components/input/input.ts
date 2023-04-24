import {Component, Prop, Vue} from 'vue-facing-decorator';

@Component({
    name: 'app-input',
    emits: ['update:modelValue']
})
export default class Input extends Vue {
    @Prop() modelValue: string;
    @Prop() icon: string;
    @Prop() type: string;
    @Prop() placeholder: string;
    @Prop() autocomplete: string;

    public onValueChange(event: any) {
        this.$emit('update:modelValue', event.target.value);
    }
}
