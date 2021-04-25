import {Options, Vue} from 'vue-class-component';

@Options({})
export default class Register extends Vue {
    private appElement: HTMLElement | null = null;

    public mounted(): void {
        this.appElement = document.getElementById('app') as HTMLElement;
        this.appElement.classList.add('register-page');
    }

    public unmounted(): void {
        (this.appElement as HTMLElement).classList.remove('register-page');
    }

    public login(): void {
        this.$router.push('/');
    }

    public loginByFacebook(): void {
        this.$router.push('/');
    }

    public loginByGoogle(): void {
        this.$router.push('/');
    }
}
