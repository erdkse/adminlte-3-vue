import {IAuthState} from '@/interfaces/state';

export default {
    setAuthentication: (state: IAuthState, payload: string): void => {
        state.authentication = payload;
    }
};
