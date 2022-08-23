const mongoose = require("mongoose")


const post = mongoose.model("post", {
    title: {
        type: String,
        trim: true,

    },
    content: {
        type: String,
        trim: true,

    },
})

module.exports = post