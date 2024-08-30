//checkAuth
//verify JWT token
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
