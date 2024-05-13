import {calculateWindowSize} from '@/utils/helpers';
import {Component, Vue, Watch} from 'vue-facing-decorator';
import {useWindowSize} from '@vueuse/core';
import {onAuthStateChanged} from 'firebase/auth';
import {firebaseAuth} from '@/firebase';
import {IUser} from '@/interfaces/user';

@Component({})
export default class App extends Vue {
    isAppLoading: boolean = true;

    async mounted() {
        await this.checkSession();
    }

    get authentication(): IUser {
        console.log(this.$store.getters);
        return this.$store.getters['auth/authentication'];
    }

    async checkSession() {
        this.isAppLoading = true;
        onAuthStateChanged(
            firebaseAuth,
            (user) => {
                if (user) {
                    this.$store.dispatch('auth/setAuthentication', user);
                } else {
                    this.$store.dispatch('auth/setAuthentication', undefined);
                }
                this.isAppLoading = false;
            },
            (e) => {
                console.log(e);
                this.$store.dispatch('auth/setAuthentication', undefined);
                this.isAppLoading = false;
            }
        );
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
