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
        (this.appElement as HTMLElement).classList.remove('sidebar-mini');
        (this.appElement as HTMLElement).classList.remove('layout-fixed');
    }

    public toggleMenuSidebar(): void {
        const isCollapsed = (this.appElement as HTMLElement).classList.contains(
            'sidebar-collapse'
        );
        if (isCollapsed) {
            (this.appElement as HTMLElement).classList.remove(
                'sidebar-collapse'
            );
        } else {
            (this.appElement as HTMLElement).classList.add('sidebar-collapse');
        }
    }
}
