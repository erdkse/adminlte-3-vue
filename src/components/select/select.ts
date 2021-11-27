import {Options, Vue} from 'vue-class-component';
import {v4 as uuidv4} from 'uuid';

@Options({
    name: 'app-select',
    props: {
        modelValue: String,
        disabled: {
            type: Boolean,
            default: false
        },
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
    private disabled: boolean;
    private type: string;
    private options: Array<Option>;

    public onValueChange(event: any) {
        this.$emit('update:modelValue', event.target.checked);
    }

    get isNoneSelected() {
        if (!this.modelValue) {
            return true;
        }

        return (
            this.options.findIndex(
                (option) => option.value === this.modelValue
            ) < 0
        );
    }
}

export interface Option {
    label: string;
    value: string | number;
}
