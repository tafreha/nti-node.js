const mongoose = require("mongoose")
const validator = require("validator")
const user = mongoose.model("user", {
    name: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        minlength: 6,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error("invalid email")
        }
    },
    password: {
        type: String,
        minlenght: 6,
        required: true,
        // match: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
        validate(value) {
            if (value.includes("password") || value.includes("123") || value.includes(this.name)) throw new Error("invalid password")
        }
    },
    addresses: [{
        addrType: { type: String, trim: true, required: true },
        addrDetails: { type: String, trim: true, required: true }
    }]
})
module.exports = user