import { checkClientAuth, setClientAuth } from './auth';
import { Topbar } from './components/topbar';
import { html, DOM } from './framework';
import { Landing } from './routes/landing';
import { Todopage } from './routes/todopage';

export const App = (): string => {
    DOM.setTitle('App');

    switch(window.location.pathname) {
        case '/':
            return html(/*html*/`${Landing({authorized: checkClientAuth()})}`);

        case '/login':
            return html(/*html*/`${Landing({authorized: checkClientAuth()})}`);

        case '/todo':
            return html(/*html*/`${Topbar({authorized: checkClientAuth()})}${Todopage()}`);

        default:
            return html(`${Landing({authorized: checkClientAuth()})}`);
    }
}
