import {IUser} from '@/interfaces/user';
import {Options, Vue} from 'vue-class-component';

@Options({})
export default class MenuSidebar extends Vue {
    public user: IUser = null;

    public mounted(): void {
        this.user = this.$store.getters.user;
    }
}
