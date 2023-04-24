/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import {Gatekeeper} from 'gatekeeper-client-sdk';

const getError = (error: any) => {
    const message = error.message || 'Failed';
    return new Error(message);
};

export const loginByAuth = async (email: string, password: string) => {
    try {
        const token = 'THIS_IS_TOKEN';
        return token;
    } catch (error: any) {
        throw getError(error);
    }
};

export const registerByAuth = async (email: string, password: string) => {
    try {
        const token = 'THIS_IS_TOKEN';
        return token;
    } catch (error: any) {
        throw getError(error);
    }
};

export const loginByGoogle = async () => {
    try {
        const token = 'THIS_IS_TOKEN';
        return token;
    } catch (error: any) {
        throw getError(error);
    }
};

export const registerByGoogle = async () => {
    try {
        const token = 'THIS_IS_TOKEN';
        return token;
    } catch (error: any) {
        throw getError(error);
    }
};

export const loginByFacebook = async () => {
    try {
        const token = 'THIS_IS_TOKEN';
        return token;
    } catch (error: any) {
        throw getError(error);
    }
};

export const registerByFacebook = async () => {
    try {
        const token = 'THIS_IS_TOKEN';
        return token;
    } catch (error: any) {
        throw getError(error);
    }
};
export const getProfile = async () => {
    try {
        const user = {
            firstName: 'User',
            email: 'admin@example.com'
        };
        return user;
    } catch (error: any) {
        throw getError(error);
    }
};
