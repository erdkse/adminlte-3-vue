/* eslint-disable no-async-promise-executor */
import {UserManager, UserManagerSettings} from 'oidc-client-ts';
import {sleep} from './helpers';

const GOOGLE_CONFIG: UserManagerSettings = {
    authority: 'https://accounts.google.com',
    client_id: '',
    client_secret: '',
    redirect_uri: `${window.location.protocol}//${window.location.host}/callback`,
    scope: 'openid email profile',
    loadUserInfo: true
};

export const GoogleProvider = new UserManager(GOOGLE_CONFIG);

export const authLogin = (email: string, password: string) => {
    return new Promise(async (res, rej) => {
        await sleep(500);
        if (email === 'admin@example.com' && password === 'admin') {
            localStorage.setItem(
                'authentication',
                JSON.stringify({profile: {email: 'admin@example.com'}})
            );
            return res({profile: {email: 'admin@example.com'}});
        }
        return rej({message: 'Credentials are wrong!'});
    });
};

export const getAuthStatus = () => {
    return new Promise(async (res) => {
        await sleep(500);
        try {
            let authentication = localStorage.getItem('authentication');
            if (authentication) {
                authentication = JSON.parse(authentication);
                return res(authentication);
            }
            return res(undefined);
        } catch (error) {
            return res(undefined);
        }
    });
};
