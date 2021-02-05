
export const html = (html: string): string => html.replace(/\r?\n|\r|\s{4}/g, '');

export const importCSS = (url: string): void => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = url;
    document.head.appendChild(css);
}

export const addCSS = (css: string): void => {
    document.getElementsByTagName('style')[0].innerHTML += css;
}
