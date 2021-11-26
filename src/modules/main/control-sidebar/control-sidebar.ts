import {Options, Vue} from 'vue-class-component';
import Checkbox from '@/components/checkbox/checkbox.vue';

@Options({
    name: 'app-control-sidebar',
    components: {
        'app-checkbox': Checkbox
    }
})
export default class ControlSidebar extends Vue {
    public handleDarkModeChange() {
        this.$store.dispatch('ui/toggleDarkMode');
    }
}
