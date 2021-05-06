import express from 'express';
const router = express.Router();

import { checkAuthenticated } from '../../config/middlewares/authenticate';


router.get('/', async (req, res) => {
    const user = await req.user;
    res.json({ title: 'Home', user: user?.username || 'User' });
});


export default router;
