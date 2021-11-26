import {Options, Vue} from 'vue-class-component';
import Checkbox from '@/components/checkbox/checkbox.vue';
import Select from '@/components/select/select.vue';
import {Option} from '@/components/select/select';

@Options({
    name: 'app-control-sidebar',
    components: {
        'app-checkbox': Checkbox,
        'app-select': Select
    }
})
export default class ControlSidebar extends Vue {
    private navbarLightVariants: Array<Option> = NAVBAR_LIGHT_VARIANTS;
    private navbarDarkVariants: Array<Option> = NAVBAR_DARK_VARIANTS;

    public handleDarkModeChange() {
        this.$store.dispatch('ui/toggleDarkMode');
    }

    private onNavbarVariantChange(event: any) {
        this.$store.dispatch('ui/setNavbarVariant', event.target.value);
    }

    get darkModeSelected() {
        return this.$store.getters['ui/darkModeSelected'];
    }
}

export const NAVBAR_LIGHT_VARIANTS: Array<Option> = [
    {value: 'navbar-light', label: 'Light'},
    {value: 'navbar-warning', label: 'Warning'},
    {value: 'navbar-white', label: 'White'},
    {value: 'navbar-orange', label: 'Orange'}
];
export const NAVBAR_DARK_VARIANTS: Array<Option> = [
    {value: 'navbar-primary', label: 'Primary'},
    {value: 'navbar-secondary', label: 'Secondary'},
    {value: 'navbar-info', label: 'Info'},
    {value: 'navbar-success', label: 'Success'},
    {value: 'navbar-danger', label: 'Danger'},
    {value: 'navbar-indigo', label: 'Indigo'},
    {value: 'navbar-purple', label: 'Purple'},
    {value: 'navbar-pink', label: 'Pink'},
    {value: 'navbar-navy', label: 'Navy'},
    {value: 'navbar-lightblue', label: 'Light Blue'},
    {value: 'navbar-teal', label: 'Teal'},
    {value: 'navbar-cyan', label: 'Cyan'},
    {value: 'navbar-dark', label: 'Dark'},
    {value: 'navbar-gray-dark', label: 'Gray Dark'},
    {value: 'navbar-gray', label: 'Gray'}
];
