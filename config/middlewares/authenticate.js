function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.json({ authenticated: false });
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.json({ authenticated: true });
    }
    return next();
}

export { checkAuthenticated, checkNotAuthenticated };