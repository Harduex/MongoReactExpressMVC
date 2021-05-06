import express from 'express';
const router = express.Router();


router.get('/', async (req, res) => {
    const {
        _id,
        username,
        fullName,
        createdAt,
        updatedAt,
    } = await req.user;

    res.json({
        _id,
        username,
        fullName,
        createdAt,
        updatedAt,
    });
});


export default router;
