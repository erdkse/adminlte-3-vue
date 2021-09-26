import {IUser} from '@/interfaces/user';
import {Options, Vue} from 'vue-class-component';
import MenuItem from '@/components/menu-item/menu-item.vue';

@Options({
    name: 'app-menu-sidebar',
    components: {
        'app-menu-item': MenuItem
    }
})
export default class MenuSidebar extends Vue {
    public menu = MENU;
    get user(): IUser {
        return this.$store.getters.user;
    }
}

export const MENU = [
    {
        name: 'Dashboard',
        path: '/'
    },
    {
        name: 'Blank',
        path: '/blank'
    },
    {
        name: 'Main Menu',
        children: [
            {
                name: 'Sub Menu',
                path: '/sub-menu-1'
            },

            {
                name: 'Blank',
                path: '/sub-menu-2'
            }
        ]
    }
];
