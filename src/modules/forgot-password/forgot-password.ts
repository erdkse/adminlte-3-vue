import {Options, Vue} from 'vue-class-component';

@Options({})
export default class ForgotPassword extends Vue {
    private appElement: HTMLElement | null = null;

    public mounted(): void {
        this.appElement = document.getElementById('app') as HTMLElement;
        this.appElement.classList.add('login-page');
    }

    public unmounted(): void {
        (this.appElement as HTMLElement).classList.remove('login-page');
    }
}
