export default {
    setAuthentication: (context: any, payload: string): void => {
        context.commit('setAuthentication', payload);
    }
};
