//checkAuth
//verify JWT token
const jwt = require('jsonwebtoken');
const User = require('../models/user.models');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token is not valid' });
    }
};

function checkAuth(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect("");
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(404).send("user not signed in");
        } else {
            next();
        }
    });
}

module.exports = authMiddleware;


