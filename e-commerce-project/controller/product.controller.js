const productModel = require("../database/models/products.model")

class product {
    static index = async(req, res) => {
        try {
            const data = await productModel.find()
            res.send({ apiStatus: true, message: "all products fetched", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static add = async(req, res) => {
        try {
            const data = new productModel(req.body)
            await data.save()
            res.send({ apiStatus: true, message: "product added", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static single = async(req, res) => {
        try {
            const data = await productModel.findById(req.params.id)
            res.send({ apiStatus: true, message: "all products fetched", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static myProducts = async(req, res) => { // localhost:3000/product/
        try {
            await req.user.populate("myProducts")
            res.send({ apiStatus: true, data: req.user.myProducts, message: "done" })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }

    static edit = async(req, res) => {
        try {
            const data = await productModel.findByIdAndUpdate(
                req.params.id,
                req.body, { runValidators: true }
            )
            res.send({ apiStatus: true, message: "all products fetched", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }

    }
    static delete = async(req, res) => {
        try {
            const data = await productModel.findByIdAndDelete(req.params.id)
            res.send({ apiStatus: true, message: "all products fetched", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }

    }


    static upImg = async(req, res) => {
        req.productModel.images = req.file.filename
        await req.product.save()
        res.send(req.product)
    }
}
module.exports = product