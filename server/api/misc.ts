import express from 'express';

const router = express.Router();


const backgrounds = [
    'https://wallpaperaccess.com/full/2564042.jpg',
    'https://wallpapercave.com/wp/T6yypye.jpg',
    'https://wallpapercave.com/wp/wp2533041.jpg',
    'https://wallpaperaccess.com/full/2562637.jpg',
    'https://wallpaper.dog/large/977286.jpg',
    'https://cutewallpaper.org/21/wallpaper-1920x1080-dark/1920x1080-Dark-Minimal-Mountains-At-Night-1080P-Laptop-Full-.jpg',
    'https://wallpapercave.com/wp/3a0T946.jpg',
    'https://wallpaperaccess.com/full/1089775.jpg',
    'https://cdn.wallpapersafari.com/28/73/TcRMwS.jpg',
    'https://wallpapercave.com/wp/8heA1h2.jpg',
    'https://i.pinimg.com/originals/ee/72/e4/ee72e41123a09d160822985d61668c18.jpg',
    'https://wallpapercave.com/wp/trlzN6b.jpg',
    'https://wallpaperaccess.com/full/284467.jpg',
    'https://wallpaperaccess.com/full/284466.jpg',
    'https://i.pinimg.com/originals/09/6a/35/096a35453660aa9b83ba4ab6d9182d61.jpg'
]
router.get('/background', async (req, res) => {
    res.json({url: backgrounds[Math.floor(Math.random() * backgrounds.length)]}).status(200);
});

export default router;
