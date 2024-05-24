import {IAuthState} from '@/interfaces/state';
import {IUser} from '@/types/user';

export default {
    currentUser: (state: IAuthState): IUser | undefined | null =>
        state.currentUser
};
