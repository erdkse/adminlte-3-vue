import {IUser} from '@/interfaces/user';
import {Options, Vue} from 'vue-class-component';
import {DateTime} from 'luxon';
import {PfDropdown, PfImage} from '@profabric/vue-components';

@Options({
    name: 'user-dropdown',
    components: {
        'pf-dropdown': PfDropdown,
        'pf-image': PfImage
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
        if (this.user) {
            return DateTime.fromISO(this.user.createdAt).toFormat(
                'dd LLLL yyyy'
            );
        }
        return '';
    }
}
