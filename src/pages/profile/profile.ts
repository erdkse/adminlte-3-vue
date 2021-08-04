import {Options, Vue} from 'vue-class-component';

@Options({})
export default class Profile extends Vue {
    private activeTab = 'ACTIVITY';

    private setActiveTab(tab: string): void {
        this.activeTab = tab;
    }
}
