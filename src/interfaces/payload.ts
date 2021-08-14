import {IUser} from './user';
export interface IPayload {
    token: string;
    user: IUser;
}
