import {IUser} from './user';
export interface IAuthState {
    token: string;
    user: IUser;
}

export interface IAuthModule {
    namespaced: boolean;
    state: IAuthState;
    mutations: any;
    actions: any;
    getters: any;
}
