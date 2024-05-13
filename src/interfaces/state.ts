import {User} from 'firebase/auth';

export interface IAuthState {
    authentication?: User;
}

export interface IAuthModule {
    namespaced: boolean;
    state: IAuthState;
    mutations: any;
    actions: any;
    getters: any;
}
