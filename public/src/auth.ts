import { userLoginPost } from "./ajax";
import { User, UserLoginRequest, UserLoginResponse } from "./models";



/* All this may be overwritten */


const authKey = 'frameworkappauth';
const authKeyUsername = authKey + 'username';
const authKeyToken = authKey + 'token';


export let sessionUser: User | null = null;


export const checkClientAuth = (): boolean => {
    if(sessionStorage.getItem(authKey) !== null && sessionStorage.getItem(authKey) !== '0') {
        if(sessionStorage.getItem(authKeyUsername) !== null && sessionStorage.getItem(authKeyUsername) !== '0') {
            if(sessionStorage.getItem(authKeyToken) !== null && sessionStorage.getItem(authKeyToken) !== '0') {
                const username: string = <string>sessionStorage.getItem(authKeyUsername)
                const token: string = <string>sessionStorage.getItem(authKeyToken)
                const user: User = {username: username, token: token};
                sessionUser = user;
            }
        }
        return true;
    }else {
        return false;
    }
}

const setClientAuthUser = (user: User): void => {
    sessionStorage.setItem(authKeyToken, user.token);
    sessionStorage.setItem(authKeyUsername, user.username);
}

export const setClientAuth = (): void => {
    sessionStorage.setItem(authKey, 'true');
    if(sessionUser !== null) setClientAuthUser(sessionUser);
}

export const login = (userLoginRequest: UserLoginRequest, callback: (userLoginResponse: UserLoginResponse) => void) => {
    userLoginPost(userLoginRequest, (userLoginResponse: UserLoginResponse) => {
        if(userLoginResponse.authorized) {
            if(userLoginResponse.username !== undefined && userLoginResponse.token !== undefined) {
                const user: User = {username: userLoginResponse.username, token: userLoginResponse.token};
                sessionUser = user;
            }
            setClientAuth();
            location.reload();
        }
        callback(userLoginResponse);
    })
} 

export const removeClientAuth = (): void => {
    sessionStorage.removeItem(authKey);
    sessionStorage.removeItem(authKeyToken);
    sessionStorage.removeItem(authKeyUsername);
}

export const clearSession = (): void => {
    sessionStorage.clear();
}


