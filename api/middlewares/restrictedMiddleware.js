const restricted = (req, res, next) => {
    const route =  req.path || '';

    if (route.length > 0){
        if (route.includes(`/api/restricted`)){
            if (req.session && req.session.userId) {
                return next();
            } else {
                return res.status(401).json({ message: 'you shall not pass!' });
            }
        }
    } 
    next();
}

module.exports = restricted;
