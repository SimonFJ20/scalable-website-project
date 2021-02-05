import { html } from './framework';
import Loginform from './loginform';

const App = (): string => {
    return html(`
    ${Loginform()}
    `);
}

export default App;
