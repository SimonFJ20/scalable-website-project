import { html, DOM } from '../framework';
import { Topbar } from '../components/topbar';

class Props {
    authorized: boolean = false;
}

export const Landing = (props: Props) => {
    DOM.setTitle('Homepage');
    if(props.authorized) {
        return html(`
        ${Topbar({authorized: true})}
        `);
    }else {
        return html(`
        ${Topbar({authorized: false})}
        `);
    }
}
