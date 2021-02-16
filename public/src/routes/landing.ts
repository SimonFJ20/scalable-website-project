import { html, DOM, runtime } from '../framework';
import { Topbar } from '../components/topbar';
import { Loginform } from '../components/loginform';
import { randomBackgroundImageGet } from '../ajax';

class Props {
    authorized: boolean = false;
}

const atRuntime = (): void => {
    DOM.setTitle('Homepage');
    randomBackgroundImageGet((backgroundImageResponse) => {
        document.body.style.backgroundImage = 'url(' + backgroundImageResponse.url + ')';
        document.body.style.backgroundSize = '100vw 100vh'
    })
}

export const Landing = (props: Props) => {
    runtime(atRuntime);
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
