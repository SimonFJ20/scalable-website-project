import { html, DOM } from './framework';
import { Topbar } from './topbar';

export const App = (): string => {
    DOM.setTitle('App');
    return html(`
    ${Topbar({autherized: true})}
    `);
}
