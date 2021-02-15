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
    console.log(req.body)
    const userLogin = <UserLogin>req.body;
    let found = false;
    users.forEach((user) => {
        if(req.body.username === user.username && req.body.password === user.password) {
            found = true;
        }
    });
    if(found) {
        res.json({autherized: true}).status(200);
        return;
    }else {
        res.json({autherized: false}).status(401);
    }
})


export default router;
