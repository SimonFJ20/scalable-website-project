import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dist/index.html'));
    res.status(200);
});

router.get('/login', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dist/index.html'));
    res.status(200);
});

router.get('/feed', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dist/index.html'));
    res.status(200);
});

router.get('/friends', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dist/index.html'));
    res.status(200);
});

router.get('/todo', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dist/index.html'));
    res.status(200);
});

export default router;
