import { randomBackgroundImageGet } from "./ajax";

const backgroundUrlKey = 'frameworkbackgroundurl';
export const loadBackgroundUrl = (newUrl: boolean = false): string => {
    if(sessionStorage.getItem(backgroundUrlKey) !== null && sessionStorage.getItem(backgroundUrlKey) !== '0') {
        if(newUrl) {
            randomBackgroundImageGet((backgroundImageResponse) => {
                sessionStorage.setItem(backgroundUrlKey, backgroundImageResponse.url);
            })
        }
    }else {
        randomBackgroundImageGet((backgroundImageResponse) => {
            sessionStorage.setItem(backgroundUrlKey, backgroundImageResponse.url);
        })
    }
    return <string>sessionStorage.getItem(backgroundUrlKey);
}

