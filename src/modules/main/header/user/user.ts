import {IUser} from '@/interfaces/user';
import {Options, Vue} from 'vue-class-component';
import Dropdown from '@/components/dropdown/dropdown.vue';
import {DateTime} from 'luxon';

@Options({
    name: 'user-dropdown',
    components: {
        'app-dropdown': Dropdown
    }
})
export default class User extends Vue {
    get user(): IUser {
        return this.$store.getters['auth/user'];
    }

    private logout() {
        this.$store.dispatch('auth/logout');
    }

    get readableCreatedAtDate() {
        return DateTime.fromISO(this.user.createdAt).toFormat('dd LLLL yyyy');
    }
}
