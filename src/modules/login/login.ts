import {Options, Vue} from 'vue-class-component';
import {loginByAuth, loginByGoogle, loginByFacebook} from '@/services/auth';

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

    public async loginByAuth(): Promise<void> {
        try {
            const token = await loginByAuth('test@email.com', '123');
            console.log(token);
        } catch (error) {
            console.log(error);
        }
    }

    public async loginByFacebook(): Promise<void> {
        try {
            const token = await loginByFacebook();
            console.log(token);
        } catch (error) {
            console.log(error);
        }
    }

    public async loginByGoogle(): Promise<void> {
        try {
            const token = await loginByGoogle();
            console.log(token);
        } catch (error) {
            console.log(error);
        }
    }
}
