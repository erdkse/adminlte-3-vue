import {Options, Vue} from 'vue-class-component';
import Header from './header/header.vue';
import MenuSidebar from './menu-sidebar/menu-sidebar.vue';
import Footer from './footer/footer.vue';

@Options({
    components: {
        'app-header': Header,
        'menu-sidebar': MenuSidebar,
        'app-footer': Footer
    }
})
export default class Main extends Vue {}
