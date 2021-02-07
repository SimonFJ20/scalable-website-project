import { html, DOM } from './framework';
import { Topbar } from './components/topbar';

export const App = (): string => {
    DOM.setTitle('App');

    console.log(window.location)

    return html(`
    ${Topbar({autherized: false})}
    `);
}
