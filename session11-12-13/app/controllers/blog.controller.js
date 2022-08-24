const blogmodel = require("../database/models/blog.model")
class Blog {
    static index = async(req, res) => { // localhost:3000/blog/
        try {
            const blogData = await blogmodel.find()
            res.send({ apiStatus: true, data: blogData, message: "done" })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static create = async(req, res) => {
        try {
            const blogData = new blogmodel({
                userId: req.user._id,
                ...req.body
            })
            await blogData.save()
            res.send({ apiStatus: true, data: blogData, message: "done" })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static myArticles = async(req, res) => { // localhost:3000/blog/
        try {
            const blogData = await blogmodel.find({ userId: req.user._id })
            res.send({ apiStatus: true, data: blogData, message: "done" })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }



    static single = async(req, res) => {
        try {
            const data = await blogmodel.findById(req.params.id)
            res.send({ apiStatus: true, message: "all users fetched", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }

    }
    static edit = async(req, res) => {
        try {
            const data = await blogmodel.findByIdAndUpdate(
                req.params.id,
                req.body, { runValidators: true }
            )
            res.send({ apiStatus: true, message: "all articles fetched", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }

    }
    static delete = async(req, res) => {
        try {
            const data = await blogmodel.findByIdAndDelete(req.params.id)
            res.send({ apiStatus: true, message: "all articles fetched", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }

    }



    // static editArticle = async(req, res) => {
    //     try {
    //         for (let prop in req.body) {
    //             req.Blog[prop] = req.body[prop]
    //         }
    //         await req.user.save()
    //         res.send({ apiStatus: true, message: "all users fetched", data: req.Blog })
    //     } catch (e) {
    //         res.send({ apiStatus: false, message: e.message, data: e })
    //     }

    // }

}
module.exports = Blog