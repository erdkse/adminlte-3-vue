import {Options, Vue} from 'vue-class-component';
import {version} from '../../../../package.json';
import {DateTime} from 'luxon';

@Options({})
export default class Footer extends Vue {
    private version: string = version;
    private currentYear: string = DateTime.now().toFormat('y');
}
