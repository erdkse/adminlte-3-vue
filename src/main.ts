import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faGooglePlus} from '@fortawesome/free-brands-svg-icons';
import {Gatekeeper} from 'gatekeeper-client-sdk';
import Toast, {PluginOptions} from 'vue-toastification';
import {createI18n} from 'vue-i18n';
import en from './translation/en.json';
import es from './translation/es.json';
import tr from './translation/tr.json';
import './index.scss';

library.add(faLock, faEnvelope, faFacebook, faGooglePlus);
Gatekeeper.configure('de378d9c-38c8-42c1-b961-9e4fa92d6a5e', {
    googleClientID:
        '816324818723-e2hokn0pvjgkf8jcks6quido903ukeri.apps.googleusercontent.com',
    facebookAppID: '972653536647742'
});

const options: PluginOptions = {};
const i18n = createI18n({
    locale: 'en',
    messages: {en, es, tr},
    fallbackLocale: 'en'
});

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .use(Toast, options)
    .use(i18n)
    .mount('#app');
