import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'app-button',
    props: {
        modelValue: String,
        icon: String,
        type: String,
        block: String,
        theme: String
    }
})
export default class Button extends Vue {
    private modelValue: string;
    private icon: string;
    private type: string = 'button';
    private block: boolean;
}
