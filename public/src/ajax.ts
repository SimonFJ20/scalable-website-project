import { BackgroundImageResponse, UserLoginRequest, UserLoginResponse } from "./models";
import { get, post } from './framework'

export const userLoginPost = (userLogin: UserLoginRequest, callback: (userLoginResponse: UserLoginResponse) => void): void => {
    post('/auth/login', userLogin, (response) => {
        callback(<UserLoginResponse>response);
    })
}

export const randomBackgroundImageGet = (callback: (backgroundImageResponse: BackgroundImageResponse) => void): void => {
    get('/misc/background', (response) => {
        callback(<BackgroundImageResponse>response);
    });
}


