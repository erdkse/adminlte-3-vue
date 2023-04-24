import {Component, Vue} from 'vue-facing-decorator';
import {PfDropdown} from '@profabric/vue-components';

@Component({
    name: 'notifications-dropdown',
    components: {
        'pf-dropdown': PfDropdown
    }
})
export default class Notifications extends Vue {}
