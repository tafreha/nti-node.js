const mongoose = require("mongoose");
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
        images: {
            type: String
        },
    }, { timestamp: true })



productSchema.virtual("myProducts", {
    ref: "cart",
    localField: "_id",
    foreignField: "productId"
})
const product = mongoose.model("product", productSchema)
module.exports = product