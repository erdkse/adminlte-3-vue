import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'app-button',
    props: {
        icon: String,
        type: String,
        block: String,
        theme: String,
        loading: Boolean,
        disabled: Boolean
    }
})
export default class Button extends Vue {
    private icon: string;
    private type: string = 'button';
    private block: boolean;
    private loading: boolean = false;
    private disabled: boolean = false;

    get isDisabled(): boolean {
        return this.loading || this.disabled;
    }
}
