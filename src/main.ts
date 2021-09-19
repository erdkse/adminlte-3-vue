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

import './index.scss';
import 'vue-toastification/dist/index.css';

library.add(faLock, faEnvelope, faFacebook, faGooglePlus);
Gatekeeper.configure('de378d9c-38c8-42c1-b961-9e4fa92d6a5e', {
    googleClientID:
        '816324818723-e2hokn0pvjgkf8jcks6quido903ukeri.apps.googleusercontent.com',
    facebookAppID: '489915919118075'
});

const options: PluginOptions = {};

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .use(Toast, options)
    .mount('#app');
