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
            res.redirect('/auth/login');
        })
        .catch((err) => {
            const message = 'User already exist';
            res.json({ message: message });
        });
});

router.get('/login', checkNotAuthenticated, (req, res) => {
    res.json({ message: req.flash('error')[0] });
});

router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: `/auth/login`,
    failureFlash: true
}));

router.get('/logout', checkAuthenticated, (req, res) => {
    req.logOut();
    res.json({ authenticated: false });
});


export default router;