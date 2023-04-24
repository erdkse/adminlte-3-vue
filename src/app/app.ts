import {calculateWindowSize} from '@/utils/helpers';
import {Options, Vue} from 'vue-class-component';
import {useWindowSize} from '@vueuse/core';

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
        const {width} = useWindowSize();
        return calculateWindowSize(width.value);
    }
}
