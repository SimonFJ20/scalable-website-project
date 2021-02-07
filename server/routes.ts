import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dist/index.html'))
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dist/index.html'))
});


export default router;
