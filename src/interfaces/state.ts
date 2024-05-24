import {IUser} from '@/types/user';

export interface IAuthState {
    currentUser?: IUser | null;
}

export interface IAuthModule {
    namespaced: boolean;
    state: IAuthState;
    mutations: any;
    actions: any;
    getters: any;
}
