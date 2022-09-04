import {Options, Vue} from 'vue-class-component';
import Dropdown from '@/components/dropdown/dropdown.vue';
import {PfImage} from '@profabric/vue-components';

@Options({
    name: 'messages-dropdown',
    components: {
        'app-dropdown': Dropdown,
        'pf-image': PfImage
    }
})
export default class Messages extends Vue {}
