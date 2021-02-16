import { DOM, html, runtime } from "../framework";
import { Loading, setLoadingState } from "./loading";
import { login, setClientAuth } from "../auth";

const loginEvent = (): void => {
    const loginNotFound = <HTMLParagraphElement>DOM.id('loginNotFound');
    const username = <HTMLInputElement>DOM.id('username');
    const password = <HTMLInputElement>DOM.id('password');
    if(username.value != '' && password.value != '') {
        login({username: username.value, password: password.value}, (userLoginResponse) => {
            if(userLoginResponse.authorized) {

                setClientAuth();
                location.reload();
            }else {
                loginNotFound.innerText = 'Incorrect Username or Password!';
                loginNotFound.style.visibility = 'visible';
            }
        })
    }else {
        loginNotFound.innerText = 'Please fill in both Username and Password!';
        loginNotFound.style.visibility = 'visible';
    }
}

const registerEvent = (): void => {

}

const recoverEvent = (): void => {

}

const atRuntime = (): void => {
    setLoadingState(false);
    DOM.id('login')?.addEventListener('click', loginEvent);
    DOM.id('register')?.addEventListener('click', registerEvent);
    DOM.id('recover')?.addEventListener('click', recoverEvent);
    DOM.id('username')?.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            const password = <HTMLInputElement>DOM.id('password');
            if(password.value == '') {
                password.focus();
            }else {
                loginEvent();
            }
        }
    })
    DOM.id('password')?.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            const username = <HTMLInputElement>DOM.id('username');
            if(username.value == '') {
                username.focus();
            }else {
                loginEvent();
            }
        }
    })
}

export const Loginform = () => {
    DOM.setCssImport('login.css');
    runtime(atRuntime);
    return html(/*html*/`
    ${Loading()}
    <div id="loginpage">
        <form id="loginform">
            <input class="loginform logintext" id="username" type="text" placeholder="Username">
            <br>
            <input class="loginform logintext" id="password" type="password" placeholder="Password">
            <p id="loginNotFound">Incorrect Username or Password!</p>
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

