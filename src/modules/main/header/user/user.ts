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
        // setDropdownOpen(false);
        try {
            if (this.authentication.profile.first_name) {
                await GoogleProvider.signoutPopup();
                this.$store.dispatch('auth/setAuthentication', undefined);
            } else if (this.authentication.userID) {
                FB.logout(() => {
                    this.$store.dispatch('auth/setAuthentication', undefined);
                    this.$router.replace('/login');
                });
            }
            localStorage.removeItem('authentication');
            this.$router.replace('/login');
        } catch (error) {
            localStorage.removeItem('authentication');
            this.$router.replace('/login');
        }
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
