import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'app-input',
    props: {
        modelValue: String,
        icon: String,
        type: String,
        placeholder: String,
        autocomplete: String
    },
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
