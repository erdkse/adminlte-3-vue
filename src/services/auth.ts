/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {Gatekeeper} from 'gatekeeper-client-sdk';

export const loginByAuth = async (email: string, password: string) => {
    const token = await Gatekeeper.loginByAuth(email, password);
    return token;
};

export const registerByAuth = async (email: string, password: string) => {
    const token = await Gatekeeper.registerByAuth(email, password);
    return token;
};

export const loginByGoogle = async () => {
    const token = await Gatekeeper.loginByGoogle();
    return token;
};

export const registerByGoogle = async () => {
    const token = await Gatekeeper.registerByGoogle();
    return token;
};

export const loginByFacebook = async () => {
    const token = await Gatekeeper.loginByFacebook();
    return token;
};

export const registerByFacebook = async () => {
    const token = await Gatekeeper.registerByFacebook();
    return token;
};
