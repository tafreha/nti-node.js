const express = require('express')
const auth = require("../middleware/auth.middleware")
const router = express.Router()
const Cart = require("../controller/cart.controller")
router.post("/add", Cart.add)
router.get("/", auth, Cart.getCartProducts)
router.delete("/delete/:id", auth, Cart.delete)



// router.get('/orders', Auth, async (req, res) => {
// 	const owner = req.user._id;
// 	try {
// 	const order = await Order.find({ owner: owner }).sort({ date: -1 });
// 	res.status(200).send(order)
// 	} catch (error) {
// 	res.status(500).send()
// 	}
// 	})





module.exports = router