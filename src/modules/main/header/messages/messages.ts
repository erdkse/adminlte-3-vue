import {Options, Vue} from 'vue-class-component';
import Dropdown from '@/components/dropdown/dropdown.vue';

@Options({
    name: 'messages-dropdown',
    components: {
        'app-dropdown': Dropdown
    }
})
export default class Messages extends Vue {}
