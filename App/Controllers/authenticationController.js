import express from 'express';
const router = express.Router();

import bcrypt from 'bcrypt';
import passport from 'passport';
import { User } from '../Models/userModel';

import { checkAuthenticated, checkNotAuthenticated } from '../../config/middlewares/authenticate';


router.post('/register', checkNotAuthenticated, async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        username: req.body.username,
        fullName: req.body.fullName,
        password: hashedPassword,
    });

    user.save()
        .then((data) => {
            // res.json({ success: true, message: 'User created' });
            res.redirect('/login');
        })
        .catch((err) => {
            const message = 'User already exist';
            res.redirect(`/register?message=${message}`);
            // res.json({ success: false, message: 'User already exist' });
        });
});

router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/logout', checkAuthenticated, (req, res) => {
    req.logOut();
    res.json({ authenticated: false });
});


export default router;