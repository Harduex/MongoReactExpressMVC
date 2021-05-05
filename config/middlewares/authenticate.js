function checkAuthenticated(request, response, next) {
    if (request.isAuthenticated()) {
        return next();
    }
    response.json({authenticated: false});
}

function checkNotAuthenticated(request, response, next) {
    if (request.isAuthenticated()) {
        return response.json({authenticated: true});
    }
    return next();
}

export { checkAuthenticated, checkNotAuthenticated };