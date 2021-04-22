import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
    res.render('about', { title: 'About', text: 'Blank page example!' });
});


export default router;
