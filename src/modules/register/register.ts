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

    public registerByAuth(): void {
        this.$router.push('/');
    }

    public registerByFacebook(): void {
        this.$router.push('/');
    }

    public registerByGoogle(): void {
        this.$router.push('/');
    }
}
