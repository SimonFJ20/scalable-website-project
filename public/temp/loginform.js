import { html } from "./framework";
var Loginform = function () {
    return html("\n    <div id=\"loginform\">\n        <input id=\"username\" type=\"text\" placeholder=\"Username\">\n        <br>\n        <input id=\"password\" type=\"text\" placeholder=\"Password\">\n        <br>\n        <input id=\"login\" type=\"button\" value=\"Login\">\n    </div>\n    ");
};
export default Loginform;
