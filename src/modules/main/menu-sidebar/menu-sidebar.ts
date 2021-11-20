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
        return this.$store.getters['auth/user'];
    }
}

export const MENU = [
    {
        name: 'Dashboard',
        icon: 'fas fa-chart-area',
        path: '/'
    },
    {
        name: 'Blank',
        path: '/blank'
    },
    {
        name: 'Transactions',
        icon: 'fas fa-book',
        path: '/transactions'
    },
    {
        name: 'labels.mainMenu',
        children: [
            {
                name: 'labels.subMenu',
                path: '/sub-menu-1'
            },

            {
                name: 'labels.blank',
                path: '/sub-menu-2'
            }
        ]
    }
];
