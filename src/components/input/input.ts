import {Component, Vue} from 'vue-facing-decorator';

@Component({
    name: 'app-input',
    emits: ['update:modelValue']
})
export default class Input extends Vue {
    private modelValue: string;
    private icon: string;
    private type: string;
    private placeholder: string;
    private autocomplete: string;

    public onValueChange(event: any) {
        this.$emit('update:modelValue', event.target.value);
    }
}
