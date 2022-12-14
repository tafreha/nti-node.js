const productModel = require("../database/models/products.model")

class product {
    static index = async(req, res) => {
        try {
            const data = await productModel.find()
            res.status(200).send({ apiStatus: true, message: "all products fetched", data })
        } catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static add = async(req, res) => {
        try {
            const data = new productModel(req.body)
                // data.myImg = req.file.path
            await data.save()
            res.status(200).send({ apiStatus: true, message: "product added", data })
                // this.upImg()
        } catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static single = async(req, res) => {
        try {
            const data = await productModel.findById(req.params.id)
            res.status(200).send({ apiStatus: true, message: "all products fetched", data })
        } catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static myProducts = async(req, res) => { // localhost:3000/product/
        try {
            await req.user.populate("myProducts")
            res.status(200).send({ apiStatus: true, data: req.user.myProducts, message: "done" })
        } catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message, data: e })
        }
    }

    static edit = async(req, res) => {
        try {
            const data = await productModel.findByIdAndUpdate(
                req.params.id,
                req.body, { runValidators: true }
            )
            res.status(200).send({ apiStatus: true, message: "all products fetched", data })
        } catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message, data: e })
        }

    }
    static delete = async(req, res) => {
        try {
            const data = await productModel.findByIdAndDelete(req.params.id)
            res.status(200).send({ apiStatus: true, message: "all products fetched", data })
        } catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message, data: e })
        }

    }


    static upImg = async(req, res) => {
        // req.product.images = req.file.filename
        // await req.product.save()
        const data = new productModel(req.body)
        data.myImg = req.file.path
        res.send("done")
    }
}
module.exports = product