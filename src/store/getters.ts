import {IState} from '@/interfaces/state';
import {IUser} from '@/interfaces/user';

export default {
    user: (state: IState): IUser => state.user,
    token: (state: IState): string => state.token
};
