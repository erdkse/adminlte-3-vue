import {IState} from '@/interfaces/state';
import {IUser} from '@/interfaces/user';

export default {
    setToken: (state: IState, payload: string): void => {
        state.token = payload;
    },
    setUser: (state: IState, payload: IUser): void => {
        state.user = payload;
    }
};
