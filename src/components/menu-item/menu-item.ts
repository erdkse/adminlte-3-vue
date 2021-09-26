import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'app-menu-item',
    props: {
        menuItem: Object,
        icon: String,
        type: String,
        placeholder: String,
        autocomplete: String
    }
})
export default class MenuItem extends Vue {
    private menuItem: any;
    private isMenuExtended: boolean = false;
    private isExpandable: boolean = false;
    private isMainActive: boolean = false;
    private isOneOfChildrenActive: boolean = false;

    public mounted(): void {
        this.isExpandable =
            this.menuItem &&
            this.menuItem.children &&
            this.menuItem.children.length > 0;
        this.calculateIsActive(this.$router.currentRoute.value.path);
        this.$router.afterEach((to) => {
            this.calculateIsActive(to.path);
        });
    }

    public handleMainMenuAction() {
        if (this.isExpandable) {
            this.toggleMenu();
            return;
        }
        this.$router.replace(this.menuItem.path);
    }

    public toggleMenu() {
        this.isMenuExtended = !this.isMenuExtended;
    }

    public calculateIsActive(url: string) {
        this.isMainActive = false;
        this.isOneOfChildrenActive = false;
        if (this.isExpandable) {
            this.menuItem.children.forEach((item: any) => {
                if (item.path === url) {
                    this.isOneOfChildrenActive = true;
                    this.isMenuExtended = true;
                }
            });
        } else if (this.menuItem.path === url) {
            this.isMainActive = true;
        }
        if (!this.isMainActive && !this.isOneOfChildrenActive) {
            this.isMenuExtended = false;
        }
    }
}
