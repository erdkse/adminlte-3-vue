import {Component, Vue} from 'vue-facing-decorator';
import Input from '@/components/input/input.vue';
import {useToast} from 'vue-toastification';
import {PfButton} from '@profabric/vue-components';

@Component({
    components: {
        'app-input': Input,
        'pf-button': PfButton
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
