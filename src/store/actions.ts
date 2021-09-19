import {IUser} from '@/interfaces/user';
import router from '@/router/index';

export default {
    login: (context: any, payload: string): any => {
        context.commit('setToken', payload);
        router.replace('/');
    },
    getUser: (context: any, payload: IUser): any => {
        context.commit('setUser', payload);
    },
    logout: (context: any) => {
        context.commit('setToken', null);
        context.commit('setUser', null);
        localStorage.removeItem('gatekeeper_token');
        router.replace('/login');
    }
};
