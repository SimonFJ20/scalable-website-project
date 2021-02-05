import { html, DOM } from './framework';
import Topbar from './topbar';

const App = (): string => {
    DOM.setTitle('App');
    return html(`
    ${Topbar()}
    `);
}

export default App;
