import { html, DOM, makeid } from './framework';
import { Topbar } from './components/topbar';

export const App = (): string => {
    DOM.setTitle('App');

    sessionStorage.setItem('id', makeid(8));

    console.log(window.location.pathname)

    switch(window.location.pathname) {
        case '/':
            return html(`
            ${Topbar({autherized: true})}
            `);
            break;
        case '/login':
            return html(`
            ${Topbar({autherized: false})}
            `);
            break;
        default:
            return html(`
            ${Topbar({autherized: false})}
            `);
            break;
    }
}
