import App from "./app";

const htmlAppTag = document.getElementsByTagName('framework-app')[0];
const headerStyle = document.createElement('style');
document.head.appendChild(headerStyle);

if(htmlAppTag != null) {
    htmlAppTag.innerHTML = App();
}else {
    console.log('%c<framework-app></framework-app>%c is not defined!',
    'color: white; background-color: blue; font-size: 1.2em', 'color: red; font-size: 1.2em');
}

