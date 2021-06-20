import {Options, Vue} from 'vue-class-component';

@Options({})
export default class Login extends Vue {
    private appElement: HTMLElement | null = null;
    public email: string = null;

    public mounted(): void {
        this.appElement = document.getElementById('app') as HTMLElement;
        this.appElement.classList.add('login-page');
    }

    public unmounted(): void {
        (this.appElement as HTMLElement).classList.remove('login-page');
    }

    public loginByAuth(): void {
        this.$router.push('/');
    }

    public loginByFacebook(): void {
        this.$router.push('/');
    }

    public loginByGoogle(): void {
        this.$router.push('/');
    }
}
