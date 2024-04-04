const express = require("express");
const router = express.Router();
const User = require("../models/userSchemas");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/conn");


router.get("/", (req, res) => {
    res.send("Hello, it's a router home page.");
});

router.post("/signup", async(req, res) => {
    try {
        const { username, email, password, cpassword, phone } = req.body;

        if (!username || !email || !password || !cpassword || !phone) {
            return res.status(422).json({ error: "Please fill in all the fields." });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(422).json({ error: "Email already exists." });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "password already present already exists." });

        } else {
            const newUser = new User({ username, email, password, cpassword, phone });


            await newUser.save();

            res.status(201).json({ message: "User successfully registered." });
        }


    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to register user." });
    }
});

router.post("/login", async(req, res) => {

    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).json("please fill all the data");
        }

        const userLogin = await User.findOne({ email });

        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 2589000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(404).json({ message: "invalid email" });
            } else {
                res.status(202).json({ message: "succefully enter the login page" });
            }
        } else {
            res.status(404).json({ message: "invalid email" });
        };

    } catch (error) {
        console.log({ error: "invalid login form" });

    }
})


module.exports = router;