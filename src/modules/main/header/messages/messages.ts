import {Component, Vue} from 'vue-facing-decorator';
import {Dropdown, Image} from '@profabric/vue-components';

@Component({
    name: 'messages-dropdown',
    components: {
        'pf-dropdown': Dropdown,
        'pf-image': Image
    }
})
export default class Messages extends Vue {}
