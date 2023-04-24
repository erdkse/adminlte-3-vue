import {IAuthState} from '@/interfaces/state';

export default {
    authentication: (state: IAuthState): string => state.authentication
};
