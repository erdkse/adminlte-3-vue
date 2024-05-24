import {IAuthState} from '@/interfaces/state';
import {IUser} from '@/types/user';

export default {
    setCurrentUser: (state: IAuthState, payload: IUser): void => {
        state.currentUser = payload;
    }
};
