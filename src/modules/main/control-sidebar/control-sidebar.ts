import {Options, Vue} from 'vue-class-component';
import Checkbox from '@/components/checkbox/checkbox.vue';
import Select from '@/components/select/select.vue';
import {Option} from '@/components/select/select';
import {NAVBAR_DARK_VARIANTS, NAVBAR_LIGHT_VARIANTS} from '@/utils/themes';

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
