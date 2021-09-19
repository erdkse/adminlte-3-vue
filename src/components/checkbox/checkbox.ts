import {Options, Vue} from 'vue-class-component';
import {v4 as uuidv4} from 'uuid';

@Options({
    name: 'app-checkbox',
    props: {
        modelValue: Boolean
    },
    emits: ['update:modelValue']
})
export default class Checkbox extends Vue {
    private ID: string = uuidv4();
    private modelValue: boolean;

    public onValueChange(event: any) {
        this.$emit('update:modelValue', event.target.checked);
    }
}
