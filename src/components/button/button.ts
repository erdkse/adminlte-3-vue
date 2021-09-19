import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'app-button',
    props: {
        icon: String,
        type: String,
        block: String,
        theme: String
    }
})
export default class Button extends Vue {
    private icon: string;
    private type: string = 'button';
    private block: boolean;
}
