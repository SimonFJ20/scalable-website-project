import { removeClientAuth } from "../auth";
import { DOM, html, runtime } from "../framework";

const topbarProfileButtonEvent = () => {
    removeClientAuth();
    location.reload();
}

class Props {
    authorized: boolean = false;
}

const atRuntime = () => {
    DOM.id('topbarProfileButton')?.addEventListener('click', topbarProfileButtonEvent);
}

export const Topbar = (props: Props) => {
    runtime(atRuntime);
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
                <a href="/" class="button">Landing</a>
                <a href="/feed" class="button">My feed</a>
                <a href="/friends" class="button">Friends</a>
            </div>
            <div class="private">
                <a href="/" class="button" id="topbarProfileButton">My Profile</a>
            </div>
        </div>
        `);
    }
    
};
