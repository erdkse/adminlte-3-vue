/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import {Options, Vue} from 'vue-class-component';
import Header from './header/header.vue';
import MenuSidebar from './menu-sidebar/menu-sidebar.vue';
import ControlSidebar from './control-sidebar/control-sidebar.vue';
import Footer from './footer/footer.vue';
import {getProfile} from '@/services/auth';

@Options({
    components: {
        'app-header': Header,
        'menu-sidebar': MenuSidebar,
        'control-sidebar': ControlSidebar,
        'app-footer': Footer
    },
    watch: {
        watchLayoutChanges: (_) => {}
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

    get watchLayoutChanges() {
        if (!this.appElement) {
            return;
        }
        this.appElement.classList.remove('dark-mode');
        this.appElement.classList.remove('sidebar-closed');
        this.appElement.classList.remove('sidebar-collapse');
        this.appElement.classList.remove('sidebar-open');
        this.appElement.classList.remove('control-sidebar-slide-open');

        if (this.darkModeSelected) {
            this.appElement.classList.add('dark-mode');
        }

        if (!this.controlSidebarCollapsed) {
            this.appElement.classList.add('control-sidebar-slide-open');
        }

        if (this.menuSidebarCollapsed && this.screenSize === 'lg') {
            this.appElement.classList.add('sidebar-collapse');
        } else if (this.menuSidebarCollapsed && this.screenSize === 'xs') {
            this.appElement.classList.add('sidebar-open');
        } else if (!this.menuSidebarCollapsed && this.screenSize !== 'lg') {
            this.appElement.classList.add('sidebar-closed');
            this.appElement.classList.add('sidebar-collapse');
        }
        return this.appElement.classList.value;
    }

    get darkModeSelected() {
        return this.$store.getters['ui/darkModeSelected'];
    }

    get menuSidebarCollapsed() {
        return this.$store.getters['ui/menuSidebarCollapsed'];
    }

    get controlSidebarCollapsed() {
        return this.$store.getters['ui/controlSidebarCollapsed'];
    }

    get screenSize() {
        return this.$store.getters['ui/screenSize'];
    }
}
