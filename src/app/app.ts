import {calculateWindowSize} from '@/utils/helpers';
import {Component, Vue} from 'vue-facing-decorator';
import {useWindowSize} from '@vueuse/core';

@Component({
    // watch: {
    //     currentWindowSize: (value) => {
    //         console.log(value);
    //     }
    // }
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
