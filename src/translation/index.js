import { createI18n } from 'vue-i18n';
import en from './en.json';
import es from './es.json';
import tr from './tr.json';
export var i18n = createI18n({
    locale: 'en',
    messages: { en: en, es: es, tr: tr },
    fallbackLocale: 'en',
    legacy: false
});
//# sourceMappingURL=index.js.map