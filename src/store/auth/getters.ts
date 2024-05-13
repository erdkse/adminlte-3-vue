import {IAuthState} from '@/interfaces/state';
import {User} from 'firebase/auth';

export default {
    authentication: (state: IAuthState): User => state.authentication
};
