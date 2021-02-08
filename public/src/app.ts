import { html, DOM, makeid } from './framework';
import { Landing } from './routes/landing';

export const App = (): string => {
    DOM.setTitle('App');

    switch(window.location.pathname) {
        case '/':
            return html(`${Landing({authorized: true})}`);

        case '/login':
            return html(`${Landing({authorized: false})}`);

        default:
            return html(`${Landing({authorized: false})}`);
    }
}
