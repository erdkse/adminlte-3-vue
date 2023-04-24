import {PfImage} from '@profabric/vue-components';
import {Component, Vue} from 'vue-facing-decorator';

@Component({
    name: 'app-profile',
    components: {
        'pf-image': PfImage
    }
})
export default class Profile extends Vue {
    private activeTab = 'ACTIVITY';

    private setActiveTab(tab: string): void {
        this.activeTab = tab;
    }
}
