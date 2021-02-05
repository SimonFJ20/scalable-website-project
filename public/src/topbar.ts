import { html } from "./framework";

export enum State {
    Unautherized,
    Autherized
}

class Props {
    state: State = State.Unautherized;
}

export const Topbar = (props: Props) => {
    if(props.state === State.Unautherized) {
        return html(/*html*/`
        <div id="topbar">
            <div class="title">
                <h1>Framework App</h1>
            </div>
            <div class="elements">
                <a href="/" class="button">Login</a>
            </div>
        </div>
        `);
    }else if(props.state === State.Autherized) {
        return html(/*html*/`
        <div id="topbar">
            <div class="title">
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
