/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {IUser} from '@/interfaces/user';

export default {
    login: (context: any, payload: string): any => {
        context.commit('setToken', payload);
    },
    getProfile: (context: any, payload: IUser): any => {
        context.commit('setUser', payload);
    },
    logout: (context: any) => {
        context.commit('setToken', null);
        context.commit('setUser', null);
    }
};
