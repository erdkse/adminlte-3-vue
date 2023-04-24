import { __awaiter, __generator } from "tslib";
import { UserManager } from 'oidc-client-ts';
import { sleep } from './helpers';
var GOOGLE_CONFIG = {
    authority: 'https://accounts.google.com',
    client_id: '533830427279-cspigijdu0g50c7imca5pvdbrcn2buaq.apps.googleusercontent.com',
    client_secret: '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',
    redirect_uri: "".concat(window.location.protocol, "//").concat(window.location.host, "/callback"),
    scope: 'openid email profile',
    loadUserInfo: true
};
export var GoogleProvider = new UserManager(GOOGLE_CONFIG);
export var facebookLogin = function () {
    return new Promise(function (res, rej) {
        var authResponse;
        FB.login(function (r) {
            if (r.authResponse) {
                authResponse = r.authResponse;
                FB.api('/me?fields=id,name,email,picture.width(640).height(640)', function (profileResponse) {
                    authResponse.profile = profileResponse;
                    authResponse.profile.picture =
                        profileResponse.picture.data.url;
                    res(authResponse);
                });
            }
            else {
                console.log('User cancelled login or did not fully authorize.');
                rej(undefined);
            }
        }, { scope: 'public_profile,email' });
    });
};
export var getFacebookLoginStatus = function () {
    return new Promise(function (res, rej) {
        var authResponse = {};
        FB.getLoginStatus(function (r) {
            if (r.authResponse) {
                authResponse = r.authResponse;
                FB.api('/me?fields=id,name,email,picture.width(640).height(640)', function (profileResponse) {
                    authResponse.profile = profileResponse;
                    authResponse.profile.picture =
                        profileResponse.picture.data.url;
                    res(authResponse);
                });
            }
            else {
                rej();
            }
        });
    });
};
export var authLogin = function (email, password) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(function (res, rej) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep(500)];
                case 1:
                    _a.sent();
                    if (email === 'admin@example.com' && password === 'admin') {
                        return [2 /*return*/, res({ profile: { email: 'admin@example.com' } })];
                    }
                    return [2 /*return*/, rej({ message: 'Credentials are wrong!' })];
            }
        });
    }); });
};
//# sourceMappingURL=oidc-providers.js.map