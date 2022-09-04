import {Options, Vue} from 'vue-class-component';
import {PfDropdown, PfImage} from '@profabric/vue-components';

@Options({
    name: 'messages-dropdown',
    components: {
        'pf-dropdown': PfDropdown,
        'pf-image': PfImage
    }
})
export default class Messages extends Vue {}
