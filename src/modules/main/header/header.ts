/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Component, Vue} from 'vue-facing-decorator';
import Messages from './messages/messages.vue';
import Notifications from './notifications/notifications.vue';
import Languages from './languages/languages.vue';
import User from './user/user.vue';

@Component({
    components: {
        'messages-dropdown': Messages,
        'notifications-dropdown': Notifications,
        'languages-dropdown': Languages,
        'user-dropdown': User
    }
})
export default class Header extends Vue {
    private headerElement: HTMLElement | null = null;
    public async mounted(): Promise<void> {
        this.headerElement = document.getElementById(
            'main-header'
        ) as HTMLElement;
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

    get navbarVariant() {
        return this.$store.getters['ui/navbarVariant'];
    }
}
