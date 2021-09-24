import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'app-dropdown-menu'
})
export default class DropdownMenu extends Vue {
    private dropdownMenuElement: HTMLElement = null;

    public mounted(): void {
        this.dropdownMenuElement = this.$refs.dropdownMenu as HTMLElement;
    }

    get fixStyles(): any {
        if (this.dropdownMenuElement) {
            const windowOffsetWidth =
                document.getElementById('app').offsetWidth;
            const offsetLeft = this.dropdownMenuElement.offsetLeft || -230;
            const elementWidth = this.dropdownMenuElement.offsetWidth || 280;
            const visiblePart = windowOffsetWidth - offsetLeft;

            console.log('offsetLeft', offsetLeft);
            console.log('elementWidth', elementWidth);
            console.log('visiblePart', visiblePart);
            console.log('windowOffsetWidth', windowOffsetWidth);

            if (offsetLeft < 0) {
                return {left: 'inherit', right: `${offsetLeft + 90}px`};
            } else if (visiblePart < elementWidth) {
                return {left: 'inherit', right: `0px`};
            }
            return {left: 'inherit', right: `0px`};
        }
        return {left: 'inherit', right: `0px`};
    }
}
