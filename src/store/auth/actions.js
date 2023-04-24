import router from '@/router/index';
export default {
    setAuthentication: function (context, payload) {
        context.commit('setAuthentication', payload);
        router.replace('/');
    }
};
//# sourceMappingURL=actions.js.map