import {Component, Vue} from 'vue-facing-decorator';
import {PfDropdown, PfImage} from '@profabric/vue-components';

@Component({
    name: 'messages-dropdown',
    components: {
        'pf-dropdown': PfDropdown,
        'pf-image': PfImage
    }
})
export default class Messages extends Vue {}
