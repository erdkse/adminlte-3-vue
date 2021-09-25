import {IUser} from '@/interfaces/user';
import {Options, Vue} from 'vue-class-component';
import Dropdown from '@/components/dropdown/dropdown.vue';

@Options({
    name: 'user-dropdown',
    components: {
        'app-dropdown': Dropdown
    }
})
export default class User extends Vue {
    get user(): IUser {
        return this.$store.getters.user;
    }

    private logout() {
        this.$store.dispatch('logout');
    }
}
