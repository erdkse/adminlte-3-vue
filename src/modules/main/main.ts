import {Options, Vue} from 'vue-class-component';
import Header from './header/header.vue';
import MenuSidebar from './menu-sidebar/menu-sidebar.vue';
import Footer from './footer/footer.vue';
import {getProfile} from '@/services/auth';

@Options({
    components: {
        'app-header': Header,
        'menu-sidebar': MenuSidebar,
        'app-footer': Footer
    },
    watch: {
        watchLayoutChanges: (value) => {
            console.log(value);
        }
    }
})
export default class Main extends Vue {
    private appElement: HTMLElement | null = null;

    public async mounted(): Promise<void> {
        this.appElement = document.getElementById('app') as HTMLElement;
        this.appElement.classList.add('sidebar-mini');
        this.appElement.classList.add('layout-fixed');
        try {
            const user = await getProfile();
            this.$store.dispatch('auth/getUser', user);
        } catch (error) {
            this.$store.dispatch('auth/logout');
        }
    }

    public unmounted(): void {
        this.appElement.classList.remove('sidebar-mini');
        this.appElement.classList.remove('layout-fixed');
    }

    public toggleMenuSidebar(): void {
        this.$store.dispatch('ui/toggleSidebarMenu');
    }

    get watchLayoutChanges() {
        if (!this.appElement) {
            return;
        }
        console.log(this.screenSize, this.isSidebarMenuCollapsed);
        this.appElement.classList.remove('sidebar-closed');
        this.appElement.classList.remove('sidebar-collapse');
        this.appElement.classList.remove('sidebar-open');
        if (this.isSidebarMenuCollapsed && this.screenSize === 'lg') {
            this.appElement.classList.add('sidebar-collapse');
        } else if (this.isSidebarMenuCollapsed && this.screenSize === 'xs') {
            this.appElement.classList.add('sidebar-open');
        } else if (!this.isSidebarMenuCollapsed && this.screenSize !== 'lg') {
            this.appElement.classList.add('sidebar-closed');
            this.appElement.classList.add('sidebar-collapse');
        }
        return this.appElement.classList.value;
    }

    get isSidebarMenuCollapsed() {
        return this.$store.getters['ui/isSidebarMenuCollapsed'];
    }

    get screenSize() {
        return this.$store.getters['ui/screenSize'];
    }
}
