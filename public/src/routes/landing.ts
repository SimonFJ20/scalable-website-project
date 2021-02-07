import { html, DOM } from '../framework';
import { Topbar } from '../components/topbar';

export const Landing = () => {
    DOM.setTitle('Homepage');
    return html(`
    ${Topbar({autherized: false})}
    `);
}
