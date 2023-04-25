import {calculateWindowSize} from '@/utils/helpers';
import {Component, Vue, Watch} from 'vue-facing-decorator';
import {useWindowSize} from '@vueuse/core';
import {
    GoogleProvider,
    getAuthStatus,
    getFacebookLoginStatus
} from '@/utils/oidc-providers';

@Component({})
export default class App extends Vue {
    isAppLoading: boolean = true;

    async mounted() {
        await this.checkSession();
    }

    async checkSession() {
        try {
            let responses: any = await Promise.all([
                getFacebookLoginStatus(),
                GoogleProvider.getUser(),
                getAuthStatus()
            ]);

            responses = responses.filter((r: any) => Boolean(r));

            if (responses && responses.length > 0) {
                this.$store.dispatch('auth/setAuthentication', responses[0]);
            }
        } catch (error: any) {
            console.log('error', error);
        }
        this.isAppLoading = false;
    }

    @Watch('windowSize')
    watchWindowSize(newValue: any) {
        if (this.$store.getters['ui/screenSize'] !== newValue) {
            this.$store.dispatch('ui/setWindowSize', newValue);
        }
    }

    get windowSize() {
        const {width} = useWindowSize();
        return calculateWindowSize(width.value);
    }
}
