import App from "./app";
var htmltag = document.getElementsByTagName('framework-app')[0];
if (htmltag != null) {
    htmltag.innerHTML = App();
}
else {
    console.log('%c<framework-app></framework-app>%c is not defined!', 'color: white; background-color: blue; font-size: 1.2em', 'color: red; font-size: 1.2em');
}
