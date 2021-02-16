import { UserLoginRequest, UserLoginResponse } from "./models";
import { get, post } from './framework'

export const userLoginPost = (userLogin: UserLoginRequest, callback: (userLoginResponse: UserLoginResponse) => void): void => {
    post('/auth/login', userLogin, (response) => {
        callback(<UserLoginResponse>response);
    })
}


