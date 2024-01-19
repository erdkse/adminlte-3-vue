import {Component, Vue} from 'vue-facing-decorator';
import {Dropdown} from '@profabric/vue-components';

@Component({
    name: 'notifications-dropdown',
    components: {
        'pf-dropdown': Dropdown
    }
})
export default class Notifications extends Vue {}
