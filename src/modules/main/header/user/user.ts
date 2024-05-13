import {Component, Vue} from 'vue-facing-decorator';
import {DateTime} from 'luxon';
import {Dropdown, Image} from '@profabric/vue-components';
import {firebaseAuth} from '@/firebase';

@Component({
    name: 'user-dropdown',
    components: {
        'pf-dropdown': Dropdown,
        'pf-image': Image
    }
})
export default class User extends Vue {
    get authentication(): any {
        return this.$store.getters['auth/authentication'];
    }

    async logout() {
        try {
            await firebaseAuth.signOut();
            this.$store.dispatch('auth/setAuthentication', undefined);
            this.$router.replace('/login');
        } catch (error) {
            console.log(error);
        }
    }

    get readableCreatedAtDate() {
        if (
            this.authentication &&
            this.authentication.metadata &&
            this.authentication.metadata.createdAt
        ) {
            return DateTime.fromMillis(
                +this.authentication.metadata.createdAt
            ).toFormat('dd LLLL yyyy');
        }
        return '';
    }
}
