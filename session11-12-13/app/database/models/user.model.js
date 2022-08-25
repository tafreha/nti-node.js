const mongoose = require("mongoose")
const bcyptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Blog = require("./blog.model")
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true

    },
    balance: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    addresses: [{
        addressType: {
            type: String,
            trim: true
        },
        addressDetails: {
            type: String,
            trim: true
        }
    }],
    userImage: {
        type: String
    },

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
})

userSchema.virtual("myPosts", {
    ref: "Blog",
    localField: "_id",
    foreignField: "userId"
})

userSchema.methods.toJSON = function() {
    const deleted = ["__v", "password", "tokens"]
    const userData = this.toObject()
    deleted.forEach(d => delete userData[d])
    return userData
}

userSchema.pre('save', async function() {
    const userData = this
    if (userData.isModified("password"))
        userData.password = await bcyptjs.hash(userData.password, 10)
})

userSchema.statics.login = async(userName, password) => {
    const userData = await User.findOne({ userName })
    if (!userData) throw new Error("invalid userName")
    const matched = await bcyptjs.compare(password, userData.password)
    if (!matched) throw new Error("invalid password")
    return userData
}

userSchema.methods.generateToken = async function() {
        const user = this
        const token = jwt.sign({ _id: user._id }, process.env.JWTKEY)
        user.tokens = user.tokens.concat({ token })
        await user.save()
        return token
    }
    // const userSchema = mongoose.Schema({})
const User = mongoose.model("User", userSchema)
module.exports = User