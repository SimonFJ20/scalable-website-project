
export const html = (html: string) => html.replace(/\r?\n|\r|\s{4}/g, '');

export const importCSS = (url: string): void => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = url;
    document.head.appendChild(css);
}
