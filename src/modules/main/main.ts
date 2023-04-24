/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import {Component, Vue, Watch} from 'vue-facing-decorator';
import Header from './header/header.vue';
import MenuSidebar from './menu-sidebar/menu-sidebar.vue';
import ControlSidebar from './control-sidebar/control-sidebar.vue';
import Footer from './footer/footer.vue';

@Component({
    components: {
        'app-header': Header,
        'menu-sidebar': MenuSidebar,
        'control-sidebar': ControlSidebar,
        'app-footer': Footer
    }
})
export default class Main extends Vue {
    private appElement: HTMLElement | null = null;

    public async mounted(): Promise<void> {
        this.appElement = document.getElementById('app') as HTMLElement;
        this.appElement.classList.add('sidebar-mini');
        this.appElement.classList.add('layout-fixed');
    }

    public unmounted(): void {
        this.appElement.classList.remove('sidebar-mini');
        this.appElement.classList.remove('layout-fixed');
    }

    public toggleMenuSidebar() {
        this.$store.dispatch('ui/toggleMenuSidebar');
    }

    @Watch('uiValues')
    watcher(newValue: any) {
        const {
            darkModeSelected,
            menuSidebarCollapsed,
            controlSidebarCollapsed,
            screenSize
        } = newValue;

        if (!this.appElement) {
            return;
        }
        this.appElement.classList.remove('dark-mode');
        this.appElement.classList.remove('sidebar-closed');
        this.appElement.classList.remove('sidebar-collapse');
        this.appElement.classList.remove('sidebar-open');
        this.appElement.classList.remove('control-sidebar-slide-open');

        if (darkModeSelected) {
            this.appElement.classList.add('dark-mode');
        }

        if (!controlSidebarCollapsed) {
            this.appElement.classList.add('control-sidebar-slide-open');
        }

        if (menuSidebarCollapsed && screenSize === 'lg') {
            this.appElement.classList.add('sidebar-collapse');
        } else if (menuSidebarCollapsed && screenSize === 'xs') {
            this.appElement.classList.add('sidebar-open');
        } else if (!menuSidebarCollapsed && screenSize !== 'lg') {
            this.appElement.classList.add('sidebar-closed');
            this.appElement.classList.add('sidebar-collapse');
        }
    }

    get uiValues() {
        return {
            darkModeSelected: this.$store.getters['ui/darkModeSelected'],
            menuSidebarCollapsed:
                this.$store.getters['ui/menuSidebarCollapsed'],
            controlSidebarCollapsed:
                this.$store.getters['ui/controlSidebarCollapsed'],
            screenSize: this.$store.getters['ui/screenSize']
        };
    }
}
