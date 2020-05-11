module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: 'Error, user must be logged in to perform this operation.'})
    }

    next();
}