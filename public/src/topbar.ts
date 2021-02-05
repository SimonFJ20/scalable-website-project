import { html } from "./framework";

export enum State {
    Unautherized,
    Autherized
}

class Props {
    state: State = State.Unautherized;
}

export const Topbar = (props: Props) => {
    return html(/*html*/`
    <div id="topbar">
        <div class="title">
            <h1>Framework App</h1>
        </div>
        <div class="elements">
            <a href="/" class="button">Login</a>
        </div>
    </div>
    `)
};
