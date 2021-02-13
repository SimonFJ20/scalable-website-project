import { DOM, html } from "../framework";
import { Loading } from "./loading";



export const Loginform = () => {
    DOM.setCssImport('login.css');
    return html(/*html*/`
    ${Loading()}
    <div id="loginpage">
        <form id="loginform">
            <input class="loginform logintext" id="username" type="text" placeholder="Username">
            <br>
            <input class="loginform logintext" id="password" type="password" placeholder="Password">
            <hr>
            <input class="loginform loginbutton" id="login" type="button" value="Login">
            <br>
            <div id="regrec">
                <input class="loginform loginbutton regrec" id="register" type="button" value="Register">
                <input class="loginform loginbutton regrec" id="recover" type="button" value="Recover">
            </div>

        </form>
    </div>
    `);
}

