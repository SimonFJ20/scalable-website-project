import { html } from "../framework";

const a = () => {
    alert('hello');
}

const run = () => {
    document.getElementById('login')?.addEventListener('click', (e) => {a()});
    return this;
}

export const Loginform = () => {

    

    return html(/*html*/`
    <div id="loginpage">
        <div id="loginform">
            <input class="loginform" id="username" type="text" placeholder="Username">
            <br>
            <input class="loginform" id="password" type="password" placeholder="Password">
            <br>
            <input class="loginform" id="login" type="button" value="Login">
        </div>
    </div>
    `);
}

//display:flex;justify-content:center;align-items:center;width:100%;height:90%;