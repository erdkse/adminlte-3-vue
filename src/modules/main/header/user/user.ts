import {Component, Vue} from 'vue-facing-decorator';
import {DateTime} from 'luxon';
import {PfDropdown, PfImage} from '@profabric/vue-components';
import {GoogleProvider} from '@/utils/oidc-providers';

declare const FB: any;

@Component({
    name: 'user-dropdown',
    components: {
        'pf-dropdown': PfDropdown,
        'pf-image': PfImage
    }
})
export default class User extends Vue {
    get authentication(): any {
        return this.$store.getters['auth/authentication'];
    }

    async logout() {
        this.$store.dispatch('auth/logout');
        // setDropdownOpen(false);
        if (this.authentication.profile.first_name) {
            await GoogleProvider.signoutPopup();
            this.$store.dispatch('auth/setAuthentication', undefined);
            this.$router.replace('/login');
        } else if (this.authentication.userID) {
            FB.logout(() => {
                this.$store.dispatch('auth/setAuthentication', undefined);
                this.$router.replace('/login');
            });
        } else {
            this.$store.dispatch('auth/setAuthentication', undefined);
            this.$router.replace('/login');
        }
        localStorage.removeItem('authentication');
    }

    get readableCreatedAtDate() {
        if (this.authentication && this.authentication.createdAt) {
            return DateTime.fromISO(this.authentication.createdAt).toFormat(
                'dd LLLL yyyy'
            );
        }
        return '';
    }
}
