import {IUser} from '@/interfaces/user';
import {Options, Vue} from 'vue-class-component';

@Options({})
export default class MenuSidebar extends Vue {
    get user(): IUser {
        return this.$store.getters.user;
    }
}
