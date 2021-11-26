/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Options, Vue} from 'vue-class-component';
import Messages from './messages/messages.vue';
import Notifications from './notifications/notifications.vue';
import Languages from './languages/languages.vue';
import User from './user/user.vue';

@Options({
    components: {
        'messages-dropdown': Messages,
        'notifications-dropdown': Notifications,
        'languages-dropdown': Languages,
        'user-dropdown': User
    },
    watch: {
        watchLayoutChanges: (_) => {}
    }
})
export default class Header extends Vue {
    private headerElement: HTMLElement | null = null;
    public async mounted(): Promise<void> {
        this.headerElement = document.getElementById(
            'main-header'
        ) as HTMLElement;
    }

    get watchLayoutChanges() {
        if (!this.headerElement) {
            return;
        }
        this.headerElement.classList.remove('navbar-light');
        this.headerElement.classList.remove('navbar-white');
        this.headerElement.classList.remove('navbar-dark');

        if (this.darkModeSelected) {
            this.headerElement.classList.add('navbar-dark');
        } else {
            this.headerElement.classList.add('navbar-white');
            this.headerElement.classList.add('navbar-light');
        }

        return this.headerElement.classList.value;
    }

    public onToggleMenuSidebar(): void {
        this.$store.dispatch('ui/toggleMenuSidebar');
    }

    public onToggleControlSidebar(): void {
        this.$store.dispatch('ui/toggleControlSidebar');
    }

    get darkModeSelected() {
        return this.$store.getters['ui/darkModeSelected'];
    }
}
