const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

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
    tokens: [{
        token: {
            type: String
        }
    }],
}, {
    timeStamp: true
})
userSchema.methods.toJSON = function() {
    const deleted = ["__v", "password", "tokens"]
    const userData = this.toObject()
    deleted.forEach(d => delete userData[d])
    return userData
}

userSchema.pre('save', async function() {
    const userData = this
        // console.log(this)
    if (userData.isModified("password"))
        userData.password = await bcryptjs.hash(this.password, 12)
})

userSchema.statics.login = async(email, password) => {
    const userData = await user.findOne({ email })
    if (!userData) throw new Error("invalid email")
    const matched = await bcryptjs.compare(password, userData.password)
    if (!matched) throw new Error("invalid password")
    return userData
}
userSchema.methods.generateToken = async function() {
    const user = this
    const token = jwt.sign({ _id: user._id }, process.env.jwtKEY)
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token

}


const user = mongoose.model("user", userSchema)
module.exports = user