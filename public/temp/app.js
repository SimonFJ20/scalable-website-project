import { html, importCSS } from './framework.ts';
import Loginform from './loginform';
var App = function () {
    importCSS('./style.css');
    return html("\n    " + Loginform() + "\n    ");
};
export default App;
