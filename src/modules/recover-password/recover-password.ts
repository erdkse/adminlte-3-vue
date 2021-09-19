import {Options, Vue} from 'vue-class-component';
import Button from '@/components/button/button.vue';
import Input from '@/components/input/input.vue';
import {useToast} from 'vue-toastification';

@Options({
    components: {
        'app-input': Input,
        'app-button': Button
    }
})
export default class RecoverPassword extends Vue {
    private appElement: HTMLElement | null = null;
    public password: string = '';
    public confirmPassword: string = '';
    private toast = useToast();

    public mounted(): void {
        this.appElement = document.getElementById('app') as HTMLElement;
        this.appElement.classList.add('login-page');
    }

    public unmounted(): void {
        (this.appElement as HTMLElement).classList.remove('login-page');
    }
}
