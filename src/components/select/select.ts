import {Options, Vue} from 'vue-class-component';
import {v4 as uuidv4} from 'uuid';

@Options({
    name: 'app-select',
    props: {
        modelValue: String,
        type: {
            type: String,
            default: 'default'
        },
        options: {
            type: Array,
            default: []
        }
    },
    emits: ['update:modelValue']
})
export default class Select extends Vue {
    private ID: string = uuidv4();
    private modelValue: string;
    private type: string;
    private options: Array<string>;

    public onValueChange(event: any) {
        console.log(event);
        // this.$emit('update:modelValue', event.target.checked);
    }
}
