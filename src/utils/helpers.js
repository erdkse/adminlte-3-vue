export var calculateWindowSize = function (windowWidth) {
    if (windowWidth >= 1200) {
        return 'lg';
    }
    if (windowWidth >= 992) {
        return 'md';
    }
    if (windowWidth >= 768) {
        return 'sm';
    }
    return 'xs';
};
export var sleep = function (time) {
    return new Promise(function (res) { return setTimeout(res, time); });
};
export var setWindowClass = function (classList) {
    var window = document && document.getElementById('root');
    if (window) {
        window.classList = classList;
    }
};
export var addWindowClass = function (classList) {
    var window = document && document.getElementById('root');
    if (window) {
        window.classList.add(classList);
    }
};
export var removeWindowClass = function (classList) {
    var window = document && document.getElementById('root');
    if (window) {
        window.classList.remove(classList);
    }
};
//# sourceMappingURL=helpers.js.map