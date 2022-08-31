const express = require('express')
const auth = require("../middleware/auth.middleware")
const router = express.Router()
const Cart = require("../controller/cart.controller")
router.post("/add", Cart.add)
router.get("/", Cart.getCartProducts)
router.delete("/delete/:id", Cart.delete)









module.exports = router