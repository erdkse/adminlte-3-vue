import {Options, Vue} from 'vue-class-component';
import Dropdown from '@/components/dropdown/dropdown.vue';

@Options({
    name: 'languages-dropdown',
    components: {
        'app-dropdown': Dropdown
    }
})
export default class Languages extends Vue {
    public selectedLanguage: string = null;

    public mounted() {
        this.selectedLanguage = this.$i18n.locale;
    }

    get flagIcon() {
        if (this.selectedLanguage === 'de') {
            return 'flag-icon-de';
        }
        if (this.selectedLanguage === 'fr') {
            return 'flag-icon-fr';
        }
        if (this.selectedLanguage === 'es') {
            return 'flag-icon-es';
        }
        return 'flag-icon-us';
    }

    public changeLanguage(langCode: string) {
        if (this.$i18n.locale !== langCode) {
            this.$i18n.locale = langCode;
            this.selectedLanguage = langCode;
        }
    }
}
