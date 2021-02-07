import { html } from "../framework";

class Props {
    autherized: boolean = false;
}

export const Topbar = (props: Props) => {
    if(props.autherized === false) {
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
    }else if(props.autherized === true) {
        return html(/*html*/`
        <div id="topbar">
            <div class="title">
                <img src="./assets/favicon-32x32.png">
                <h1>Framework App</h1>
            </div>
            <div class="public">
                <a href="/" class="button">My Profile</a>
                <a href="/" class="button">My Profile</a>
                <a href="/" class="button">My Profile</a>
            </div>
            <div class="private">
                <a href="/" class="button">My Profile</a>
            </div>
        </div>
        `);
    }
    
};
