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

    get sidebarSkin() {
        return this.$store.getters['ui/sidebarSkin'];
    }
}

export const MENU = [
    {
        name: 'labels.dashboard',
        path: '/'
    },
    {
        name: 'labels.blank',
        path: '/blank'
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
