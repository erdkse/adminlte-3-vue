import {IUser} from './user';
export interface IAuthState {
    authentication: any;
}

export interface IAuthModule {
    namespaced: boolean;
    state: IAuthState;
    mutations: any;
    actions: any;
    getters: any;
}
