const mongoose = require("mongoose");
const { stringify } = require("querystring");
const productSchema =
    mongoose.Schema({
        name: { type: String, require: true },
        //     productId: { type: String,
        // require: true },
        category: { type: String },
        description: { require: true, type: String },
        price: {
            type: Number,
            require: true,
        },
        images: [],
    }, { timestamp: true })
const product = mongoose.model("product", productSchema)
module.exports = product;