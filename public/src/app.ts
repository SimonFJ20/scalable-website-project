import { html, DOM } from './framework';
import { Topbar, State } from './topbar';

export const App = (): string => {
    DOM.setTitle('App');
    return html(`
    ${Topbar({state: State.Autherized})}
    `);
}
