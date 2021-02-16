import { html, DOM, runtime } from '../framework';
import { Topbar } from '../components/topbar';
import { Loginform } from '../components/loginform';
import { loadBackgroundUrl } from '../background';

class Props {
    authorized: boolean = false;
}

let isAuthorized: boolean = false;
const atRuntime = (): void => {
    DOM.setTitle('Homepage'); // For redundency, proply best remove it
    let imageurl = loadBackgroundUrl();
    if(!isAuthorized) imageurl = loadBackgroundUrl(true);
    document.body.style.backgroundImage = 'url(' + imageurl + ')';
    document.body.style.backgroundSize = '100vw 100vh'
}

export const Landing = (props: Props) => {
    DOM.setTitle('Homepage'); // Fast action
    runtime(atRuntime);
    isAuthorized = props.authorized;
    if(props.authorized) {
        return html(`
        ${Topbar({authorized: true})}
        `);
    }else {
        return html(`
        ${Topbar({authorized: false})}
        ${Loginform()}
        `);
    }
}
