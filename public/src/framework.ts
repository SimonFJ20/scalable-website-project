/* General HTML utilities */

// For general
export class DOM {
    public static setTitle = (title: string): void => {
        document.title = title;
    };

    /**URL specifies file in /style/ folder */
    public static setCssImport = (url: string): void => {
        const newLinkElement = document.createElement("link");
        newLinkElement.rel = "stylesheet";
        newLinkElement.href = "./style/" + url;
        document.head.appendChild(newLinkElement);
    };

    public static id = (id: string) => {
        return document.getElementById(id);
    };

    public static q = (elementQuery: string) => {
        return document.querySelector(elementQuery);
    };
}

// removes whitespace etc
export const html = (html: string): string =>
    html.replace(/\r?\n|\r|\s{4}/g, "");

let runtimeCallbacks: Function[] = [];
export const runtime = (...callbacks: Function[]): void => {
    callbacks.forEach((callback) => {
        runtimeCallbacks.push(callback);
    });
};
export const execRuntimeScripts = (): void => {
    runtimeCallbacks.forEach((callback) => {
        callback();
    });
};

/* Ajax + JQuery */
/*
 *   Allthough i think it would be better to do without jquery, im lazy
 */

export const get = (url: string, callback: (data: object) => void) => {
    $.get(url, callback, "json");
};

export const post = (url: string, data: object, callback: (data: object) => void) => {
    const settings = {
        url: url,
        method: "POST",
        timeout: 0,
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
    };
    $.ajax(settings).done(callback);
};

/* Miscellaneous utilities */

export const makeid = (length: number): string => {
    let id = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
};
