const express = require("express");
const userModel = require("../models/user.models");
const router = express.Router();

router.get("/:username", async (req, res) => {
    const foundUser = await userModel.findOne({ name: username });
    if (!foundUser) return res.status(404).json({ status: "user not found!" });

    return res.json({
        name: foundUser.name,
        email: foundUser.email,
    });
});

module.exports = router;
