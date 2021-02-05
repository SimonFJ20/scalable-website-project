import { html, importCSS } from './framework';
import Loginform from './loginform';

const App = (): string => {
    importCSS('./style.css');
    return html(`
    ${Loginform()}
    `);
}

export default App;
