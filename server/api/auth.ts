import express from 'express';

const router = express.Router();


router.post('/', async (req, res) => {
    res.json({msg: 'megabruh'});
});



export default router;
