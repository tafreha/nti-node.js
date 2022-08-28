const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        require: true,
    },
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "product",
        require: true,
    },
    count: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
}, )
const Cart = mongoose.model('cart', cartSchema)
module.experts = Cart