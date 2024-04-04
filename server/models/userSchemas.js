const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    cpassword: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]

});

userSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        // Check if cpassword matches password before hashing
        if (this.password !== this.cpassword) {
            throw new Error("Password and confirmation password do not match.");
        }

        // Hash the password
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);

        // Do not hash cpassword; store it in plain text for comparison during registration
    }
    next();
});
userSchema.methods.generateAuthToken = async function() {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        console.log(token); // Move this line before the return statement
        return token;
    } catch (err) {
        console.error(err.message);
        throw new Error("Failed to generate authentication token.");
    }
};




const User = mongoose.model('User', userSchema);
module.exports = User;