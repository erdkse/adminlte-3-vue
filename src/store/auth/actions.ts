import {IUser} from '@/types/user';

export default {
    setCurrentUser: (context: any, payload: IUser): void => {
        context.commit('setCurrentUser', payload);
    }
};
