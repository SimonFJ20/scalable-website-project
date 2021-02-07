import { html, DOM, makeid } from './framework';
import { Topbar } from './components/topbar';

export const App = (): string => {
    DOM.setTitle('App');

    if(sessionStorage.getItem('id') != null) {
        console.log(sessionStorage.getItem('id'));
    }
    sessionStorage.setItem('id', makeid(8));

    console.log(window.location.pathname)

    return html(`
    ${Topbar({autherized: false})}
    `);
}
