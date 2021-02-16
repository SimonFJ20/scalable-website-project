import express from 'express';
import { makeid } from '../utils';
import { UserLoginRequest, UserLoginResponse } from './models'

const router = express.Router();


// ONLY for testing purposes
const users = [
    {
        username: 'man',
        password: '1234',
        token: '0'
    },
    {
        username: 'simon',
        password: 'test',
        token: '0'
    }
]


router.post('/', async (req, res) => {
    res.json({msg: 'megabruh'});
});

router.post('/login', async (req, res) => {
    const userLoginRequest = <UserLoginRequest>req.body;
    //userLoginRequest.username = userLoginRequest.username.replace(/\s/g, ''); // Removes all spaces
    userLoginRequest.username = userLoginRequest.username.trim(); // Remove spaces before and after
    let found = false;
    let userLoginResponse: UserLoginResponse = {authorized: false};
    users.forEach((user, i) => {
        if(userLoginRequest.username === user.username && userLoginRequest.password === user.password) {
            found = true;
            const newToken = makeid(32)
            users[i].token = newToken;
            userLoginResponse = {authorized: true, username: user.username, token: newToken};
        }
    });
    if(found) {
        res.json(userLoginResponse).status(200);
        return;
    }else {
        res.json(userLoginResponse).status(401);
    }
})


export default router;
