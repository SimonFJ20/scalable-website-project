import { UserLogin, UserLoginResponse } from "./models";
import { get, post } from './framework'

export const sendLoginCredentials = (userLogin: UserLogin, callback: (data: UserLoginResponse) => void): void => {
    post('/auth/login', userLogin, (data) => {
        callback(<UserLoginResponse>data);
    })
}


