
const authKey = 'frameworkappauth';

export const checkClientAuth = (): boolean => {
    if(sessionStorage.getItem(authKey) != null && sessionStorage.getItem(authKey) !== '0') {
        return true;
    }else {
        return false;
    }
}

export const setClientAuth = (): void => {
    sessionStorage.setItem(authKey, '0');
}

export const removeClientAuth = (): void => {
    sessionStorage.removeItem(authKey);
}

export const clearSession = (): void => {
    sessionStorage.clear();
}


