import express from 'express';
const router = express.Router();


router.get('/', async (req, res) => {
    const user = await req.user;
    res.json({ title: 'Profile', user: user?.username || 'User' });
});


export default router;
