

/* General HTML utilities */

// For general 
export class DOM {

    public static setTitle = (title: string): void => {
        document.title = title;
    }

    public static setCssImport = (url: string): void => {
        const newLinkElement = document.createElement('link');
        newLinkElement.rel = 'stylesheet';
        newLinkElement.href = url;
        document.head.appendChild(newLinkElement);
    }

}

// removes whitespace etc
export const html = (html: string): string => html.replace(/\r?\n|\r|\s{4}/g, '');

let runtimeCallbacks: CallableFunction[];
export const runtime = (...callbacks: CallableFunction[]) => {
    for(let i = 0; i < callbacks.length; i++) {
        runtimeCallbacks.push(callbacks[i]);
    }
}

export const execRuntimeScripts = (): void => {
    runtimeCallbacks.push(() => {alert('execed')})
    
    for(let i = 0; i < runtimeCallbacks.length; i++) {
        runtimeCallbacks[i]();
    }
}




/* Miscellaneous utilities */

  

export const makeid = (length: number): string => {
    let id = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i = 0; i < length; i++) {
       id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
}
