import { html } from "../framework";

export const Todopage = () => {

    
    fetch('http://gamer/todo.page').then(response => response.text()).then(data => document.write(data));

    return html(/*html*/``);
}
