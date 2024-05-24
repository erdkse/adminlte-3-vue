import {Component, Vue} from 'vue-facing-decorator';
import MenuItem from '@/components/menu-item/menu-item.vue';
import {Image} from '@profabric/vue-components';
import SidebarSearch from '@/components/sidebar-search/sidebar-search.vue';
import {i18n} from '@/translation';
import {IUser} from '@/types/user';
import {toRaw} from 'vue';

@Component({
    name: 'app-menu-sidebar',
    components: {
        'app-menu-item': MenuItem,
        'app-sidebar-search': SidebarSearch,
        'pf-image': Image
    }
})
export default class MenuSidebar extends Vue {
    menu = MENU;

    get currentUser(): IUser | undefined {
        const user = this.$store.getters['auth/currentUser'];
        return user;
    }

    get sidebarSkin() {
        return this.$store.getters['ui/sidebarSkin'];
    }
}

export const MENU = [
    {
        name: i18n.global.t('labels.dashboard'),
        path: '/'
    },
    {
        name: i18n.global.t('labels.blank'),
        path: '/blank'
    },
    {
        name: i18n.global.t('labels.mainMenu'),
        children: [
            {
                name: i18n.global.t('labels.subMenu'),
                path: '/sub-menu-1'
            },

            {
                name: i18n.global.t('labels.blank'),
                path: '/sub-menu-2'
            }
        ]
    }
];
