import {Options, Vue} from 'vue-class-component';
import Dropdown from '@/components/dropdown/dropdown.vue';

@Options({
    name: 'notifications-dropdown',
    components: {
        'app-dropdown': Dropdown
    }
})
export default class Notifications extends Vue {}
