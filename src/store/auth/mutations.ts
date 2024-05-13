import {IAuthState} from '@/interfaces/state';
import {User} from 'firebase/auth';

export default {
    setAuthentication: (state: IAuthState, payload: User): void => {
        state.authentication = payload;
    }
};
