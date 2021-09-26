import {Options, Vue} from 'vue-class-component';
import DropdownMenu from './dropdown-menu/dropdown-menu.vue';

@Options({
    name: 'app-dropdown',
    components: {
        'app-dropdown-menu': DropdownMenu
    },
    props: {
        size: String
    }
})
export default class Dropdown extends Vue {
    private dropdownElement: HTMLElement;
    public isOpen: boolean = false;
    public size: string = 'md';

    public mounted(): void {
        this.dropdownElement = this.$refs.dropdown as HTMLElement;
        document.addEventListener('click', this.documentClick);
    }

    public unmounted(): void {
        document.removeEventListener('click', this.documentClick);
    }

    private documentClick(event: Event) {
        const target: HTMLElement = event.target as HTMLElement;
        if (
            this.dropdownElement !== target &&
            !this.dropdownElement.contains(target)
        ) {
            this.isOpen = false;
        }
    }

    private toggleDropdown() {
        this.isOpen = !this.isOpen;
    }
}
