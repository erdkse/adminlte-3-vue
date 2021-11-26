import {Options, Vue} from 'vue-class-component';
import Checkbox from '@/components/checkbox/checkbox.vue';
import Select from '@/components/select/select.vue';

@Options({
    name: 'app-control-sidebar',
    components: {
        'app-checkbox': Checkbox,
        'app-select': Select
    }
})
export default class ControlSidebar extends Vue {
    private navbarVariants: Array<string> = NAVBAR_VARIANTS;

    public handleDarkModeChange() {
        this.$store.dispatch('ui/toggleDarkMode');
    }
}

export const NAVBAR_VARIANTS: Array<string> = [
    'primary',
    'secondary',
    'info',
    'success',
    'danger',
    'indigo',
    'purple',
    'pink',
    'navy',
    'lightblue',
    'teal',
    'cyan',
    'dark',
    'graydark',
    'gray',
    'light',
    'warning',
    'white',
    'orange'
];
