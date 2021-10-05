import {Options, Vue} from 'vue-class-component';

@Options({
    watch: {
        currentWindowSize: (value) => {
            console.log(value);
        }
    }
})
export default class App extends Vue {
    get currentWindowSize() {
        if (this.$store.getters['ui/screenSize'] !== this.windowSize) {
            this.$store.dispatch('ui/setWindowSize', this.windowSize);
        }
        return this.windowSize;
    }

    get windowSize() {
        if (this.$windowWidth >= 1200) {
            return 'lg';
        }
        if (this.$windowWidth >= 992) {
            return 'md';
        }
        if (this.$windowWidth >= 768) {
            return 'sm';
        }
        return 'xs';
    }
}
