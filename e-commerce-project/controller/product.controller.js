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
            const productData = new productModel(req.body)
            await productData.save()
            res.send({ apiStatus: true, message: "product added", data: productData })
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
        req.product.productImage = req.file.filename
        await req.product.save()
        res.send(req.product)
    }
}
module.exports = product