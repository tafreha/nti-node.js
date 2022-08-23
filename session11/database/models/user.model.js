const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,

    },
    email: {
        type: String,
        trim: true,

    },
    password: {
        type: String,
        minlenght: 6,
        required: true,


    },
    age: {
        type: Number,
        min: 21,
        max: 60,

    },

    status: {
        type: Boolean,
        default: false
    },
}, {
    timeStamp: true
})
const user = mongoose.model("user", userSchema)
module.exports = user