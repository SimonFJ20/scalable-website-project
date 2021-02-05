export var html = function (html) { return html.replace(/\r?\n|\r|\s{4}/g, ''); };
export var importCSS = function (url) {
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = url;
    document.head.appendChild(css);
};
