import {Store} from 'vuex';
import {IState} from './interfaces/state';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<IState>;
    }
}
