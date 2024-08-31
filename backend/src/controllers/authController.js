const User = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = new User({ name, email, password });
        await user.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        console.log(user);

        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ error: "Server error" });
            }

            if (isMatch) {
                const token = jwt.sign(
                    { id: user._id },
                    process.env.JWT_SECRET,
                    { expiresIn: "1d" }
                );
                return res.json({ status: "success", token });
            } else {
                return res.status(401).json({ error: "Invalid credentials" });
            }
        });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
