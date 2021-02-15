import express from 'express';
import { UserLogin } from './models'

const router = express.Router();

const users = [
    {
        username: 'man',
        password: '1234'
    },
    {
        username: 'simon',
        password: 'test'
    }
]


router.post('/', async (req, res) => {
    res.json({msg: 'megabruh'});
});

router.post('/login', async (req, res) => {
    const userLogin = <UserLogin>req.body;
    let found = false;
    users.forEach((user) => {
        if(userLogin.username === user.username && userLogin.password === user.password) {
            found = true;
        }
    });
    if(found) {
        res.json({authorized: true}).status(200);
        return;
    }else {
        res.json({authorized: false}).status(401);
    }
})


export default router;
