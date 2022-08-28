const Cart = require("../database/models/carts.model")
const items = require("../database/models/products.model")
class carts {

    static getCartProducts = async(req, res) => {
        try {
            const carts = await Cart.findOne({ userId: req.user._id }).populate('productId')
            if (Cart && cart.items.length > 0) {
                res.status(200).send({ status: 'ok', carts })
            } else {
                res.send(null);
            }
        } catch (err) {
            res.status(500).send()
        }
    }

    static add = async(req, res) => {
        const owner = req.user._id;
        const { productId, count } = req.body;
        try {
            const cart = await Cart.findOne({ owner })
            const item = await item.findOne({ _id: productId })
            if (!item) {
                res.status(404).send({ message: "item not found" })
                return;
            }
            const price = item.price
            const name = item.name
            if (cart) {
                const itemIndex = cart.items.findIndex((item) => item.productId == productId);
                if (itemIndex > -1) {
                    let product = cart.items[itemIndex];
                    product.count += countcart.bill = cart.items.reduce((accc, curr) => {
                        return acc + curr.count * curr.price;
                    }, 0)
                    cart.items[itemIndex] = product;
                    await cart.save();
                    res.status(200).send(cart);
                } else {
                    cart.items.push({ productId, name, count, price });
                    cart.bill = cart.items.reduce((acc, curr) => {
                        return acc + curr.count * curr.price;
                    }, 0)
                    await cart.save();
                    res.status(200).send(cart);
                }
            } else {
                const newCart = await Cart.create({
                    owner,
                    items: [{ productId, name, count, price }],
                    bill: count * price,
                });
                return res.status(201).send(newCart)
            }
        } catch (err) {
            console.log(err)
            res.status(500).send("something is wrong")
        }
    }
    static delete = async(req, res) => {
        const owner = req.user._id
        const productId = req.query.productId

        try {
            let cart = await Cart.findOne({ owner })
            const itemIndex = cart.items.findIndex((item) => item.productId == productId)
            if (itemIndex > -1) {
                let item = cart.items[itemIndex]
                cart.bill -= item.count * item.price;
                if (cart.bill < 0) {
                    cart.bill = 0
                }
                cart, items.splice(itemIndex, 1);
                cart.bill = cart.items.reduce((acc, curr) => {
                    return acc + curr.count * curr.price;
                }, 0)
                cart = await cart.save();
                res.status(200).send(cart)
            } else {
                res.status(404).send("item not found");
            }

        } catch (Error) {
            console.log(err)
            res.status(400).send()
        }
    }

}
module.exports = carts