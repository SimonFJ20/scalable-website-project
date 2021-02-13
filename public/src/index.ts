import { App } from "./app";
import { execRuntimeScripts } from "./framework";

const htmlAppTag = document.getElementsByTagName('x-app')[0];

if(htmlAppTag != null) {
    htmlAppTag.innerHTML = App();
    execRuntimeScripts();
}else {
    console.log('%c<x-app></x-app>%c is not defined!',
    'color: white; background-color: blue; font-size: 1.2em', 'color: red; font-size: 1.2em');
}

