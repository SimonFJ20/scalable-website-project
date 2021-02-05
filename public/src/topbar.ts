import { html } from "./framework";

const Topbar = () => {
    return html(/*html*/`
    <div id="topbar">
        <div class="title">
            <h1>Framework App</h1>
        </div>
        <div class="elements">
            <a href="." class="button">Log in</a>
        </div>
    </div>
    `)
};

export default Topbar;
