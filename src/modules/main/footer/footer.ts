import {Component, Vue} from 'vue-facing-decorator';
import {version} from '../../../../package.json';
import {DateTime} from 'luxon';

@Component({})
export default class Footer extends Vue {
    private version: string = version;
    private currentYear: string = DateTime.now().toFormat('y');
}
