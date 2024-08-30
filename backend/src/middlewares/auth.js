//checkAuth
//verify JWT token
<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const User = require('../models/User');

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

module.exports = authMiddleware;
=======
const jwt = require("jsonwebtoken");
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
>>>>>>> de545649a0db4f6bc2121f1bce3e6bb08f77be14
