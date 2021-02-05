

/* General HTML utilities */

export const html = (html: string): string => html.replace(/\r?\n|\r|\s{4}/g, '');

export class DOM {

    public static setTitle = (title: string): void => {
        document.title = title;
    }

    public static setCssImport = (url: string): void => {
        document.createElement
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
