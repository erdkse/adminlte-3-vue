import {Options, Vue} from 'vue-class-component';
import Dropdown from '@/components/dropdown/dropdown.vue';

@Options({
    name: 'languages-dropdown',
    components: {
        'app-dropdown': Dropdown
    }
})
export default class Languages extends Vue {}
