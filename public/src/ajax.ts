import { UserLogin } from "./models";
import { get, post } from './framework'

export const sendLoginCredentials = (userLogin: UserLogin, callback: (data: object) => void): void => {
    post('/auth/login', userLogin, (data) => {
        callback(data);
    })
}


