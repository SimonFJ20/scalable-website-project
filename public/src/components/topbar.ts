import { removeClientAuth, sessionUser } from "../auth";
import { DOM, html, runtime } from "../framework";

let authorized: boolean = false;

const topbarProfileButtonEvent = () => {
    removeClientAuth();
    location.reload();
}

class Props {
    authorized: boolean = false;
}

const atRuntime = () => {
    //DOM.id('topbarProfileButton')?.addEventListener('click', topbarProfileButtonEvent);
    if(authorized) {
        const topbarProfileButton = <HTMLAnchorElement>DOM.id('topbarProfileButton')
        topbarProfileButton.addEventListener('click', topbarProfileButtonEvent);
        if(sessionUser !== null) topbarProfileButton.innerText = sessionUser.username.charAt(0).toUpperCase() + sessionUser.username.slice(1);
    }
    
}

export const Topbar = (props: Props) => {
    runtime(atRuntime);
    authorized = props.authorized;
    if(props.authorized === false) {
        return html(/*html*/`
        <div id="topbar">
            <div class="title">
                <img src="./assets/favicon-32x32.png">
                <h1>Framework App</h1>
            </div>
            <div class="public">
            </div>
            <div class="private">
                <a href="/" class="button">Login</a>
            </div>
        </div>
        `);
    }else if(props.authorized === true) {
        return html(/*html*/`
        <div id="topbar">
            <div class="title">
                <img src="./assets/favicon-32x32.png">
                <h1>Framework App</h1>
            </div>
            <div class="public">
                <a href="/" class="button">Home</a>
                <a href="/feed" class="button">Feed</a>
                <a href="/friends" class="button">Friends</a>
            </div>
            <div class="private">
                <a href="/" class="button" id="topbarProfileButton">My Profile</a>
            </div>
        </div>
        `);
    }
    
};
