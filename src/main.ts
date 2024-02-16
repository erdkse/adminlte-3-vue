import {createApp} from 'vue';
import App from './app/app.vue';
import router from './router';
import store from './store';
import {i18n} from './translation';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import Toast, {PluginOptions} from 'vue-toastification';
import {ProfabricComponents} from '@profabric/vue-components';
import VueGtag from 'vue-gtag';

import './index.scss';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';

const {VITE_NODE_ENV, VITE_GA_ID} = import.meta.env;

library.add(faEnvelope, faLock);

const options: PluginOptions = {
    timeout: 3000,
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

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .use(Toast, options)
    .use(i18n as any)
    .use(ProfabricComponents);

if (VITE_NODE_ENV === 'production' && VITE_GA_ID) {
    app.use(
        VueGtag,
        {
            config: {id: VITE_GA_ID}
        },
        router
    );
}

app.mount('#app');
