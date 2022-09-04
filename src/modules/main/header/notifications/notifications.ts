import {Options, Vue} from 'vue-class-component';
import {PfDropdown} from '@profabric/vue-components';

@Options({
    name: 'notifications-dropdown',
    components: {
        'pf-dropdown': PfDropdown
    }
})
export default class Notifications extends Vue {}
