import {IAuthState} from '@/interfaces/state';
import {IUser} from '@/interfaces/user';

export default {
    setToken: (state: IAuthState, payload: string): void => {
        state.token = payload;
    },
    setUser: (state: IAuthState, payload: IUser): void => {
        state.user = payload;
    }
};
