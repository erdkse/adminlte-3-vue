import {createApp} from 'vue';
import App from './app/app.vue';
import router from './router';
import store from './store';

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {Gatekeeper} from 'gatekeeper-client-sdk';
import Toast, {PluginOptions} from 'vue-toastification';
import {createI18n} from 'vue-i18n';
import {VueWindowSizePlugin} from 'vue-window-size/option-api';
import {ProfabricComponents} from '@profabric/vue-components';

import en from './translation/en.json';
import es from './translation/es.json';
import tr from './translation/tr.json';
import './index.scss';

Gatekeeper.initialize('de378d9c-38c8-42c1-b961-9e4fa92d6a5e');

const options: PluginOptions = {
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false
};
export const i18n = createI18n({
    locale: 'en',
    messages: {en, es, tr},
    fallbackLocale: 'en'
});

(window as any).PF = {
    config: {
        mode: 'bs4'
    }
};

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .use(VueWindowSizePlugin)
    .use(Toast, options)
    .use(i18n)
    .use(ProfabricComponents)
    .mount('#app');
