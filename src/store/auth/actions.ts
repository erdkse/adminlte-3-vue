import {User} from 'firebase/auth';

export default {
    setAuthentication: (context: any, payload: User): void => {
        context.commit('setAuthentication', payload);
    }
};
