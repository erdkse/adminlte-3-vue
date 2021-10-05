import {calculateWindowSize} from '@/utils/helpers';
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
        return calculateWindowSize(this.$windowWidth);
    }
}
