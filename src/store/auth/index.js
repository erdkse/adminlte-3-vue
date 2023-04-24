import mutations from './mutations';
import actions from './actions';
import getters from './getters';
var authModule = {
    namespaced: true,
    state: {
        authentication: undefined
    },
    mutations: mutations,
    actions: actions,
    getters: getters
};
export default authModule;
//# sourceMappingURL=index.js.map