import { checkClientAuth, setClientAuth } from './auth';
import { html, DOM, makeid } from './framework';
import { Landing } from './routes/landing';

export const App = (): string => {
    DOM.setTitle('App');

    switch(window.location.pathname) {
        case '/':
            return html(`${Landing({authorized: checkClientAuth()})}`);

        case '/login':
            return html(`${Landing({authorized: checkClientAuth()})}`);

        default:
            return html(`${Landing({authorized: checkClientAuth()})}`);
    }
}
