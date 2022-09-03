const mongoose = require("mongoose");
const productSchema =
    mongoose.Schema({
        name: { type: String, required: true },
        //     productId: { type: String,
        // require: true },
        category: { required: true, type: String },
        description: { required: true, type: String },
        price: {
            type: Number,
            required: true,
        },
        images: {
            type: String,
            required: true
        },
    }, { timestamp: true })



productSchema.virtual("myProducts", {
    ref: "cart",
    localField: "_id",
    foreignField: "productId"
})
const product = mongoose.model("product", productSchema)
module.exports = product