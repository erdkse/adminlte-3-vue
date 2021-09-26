import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'app-dropdown-menu',
    props: {
        size: String
    }
})
export default class DropdownMenu extends Vue {
    private dropdownMenuElement: HTMLElement = null;
    public size: string;

    public mounted(): void {
        this.dropdownMenuElement = this.$refs.dropdownMenu as HTMLElement;
    }

    get fixStyles(): any {
        if (this.dropdownMenuElement) {
            const windowWidth = document.getElementById('app').offsetWidth;
            const offsetLeft =
                this.dropdownMenuElement.getBoundingClientRect().left;
            const offsetWidth = this.dropdownMenuElement.offsetWidth;
            const visiblePart = windowWidth - offsetLeft;

            if (offsetLeft < 0) {
                return {
                    left: 'inherit',
                    right: `${offsetLeft - 5}px`
                };
            } else if (visiblePart < offsetWidth) {
                return {left: 'inherit', right: `0px`};
            }
            return {left: 'inherit', right: `0px`};
        }
        return {left: 'inherit', right: `0px`};
    }
}
