import {Options, Vue} from 'vue-class-component';
import {version} from '../../../../package.json';

@Options({})
export default class Footer extends Vue {
    private version: string = version;
}
