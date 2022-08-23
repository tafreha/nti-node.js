const postModule = require("../database/models/post.modle")
class Post {
    static index = async(req, res) => {
        try {
            const data = await postModule.find()
            res.send({ apiStatus: true, message: "all post fetched", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static create = async(req, res) => {
        try {
            const data = new postModule(req.body)
            await data.save()
            res.send({ apiStatus: true, message: "post added", data: data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static single = async(req, res) => {
        try {
            const postId = req.params.id
            const data = await postModule.findById(postId)
            res.send({ apiStatus: true, message: "user fetched", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static delete = async(req, res) => {
        try {
            const postId = req.params.id
            const data = await postModule.findByIdAndDelete(postId)
            res.send({ apiStatus: true, message: "POST DELETED", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static edit = async(req, res) => {
        try {
            const postId = req.params.id
            const data = await postModule.findByIdAndUpdate(postId, req.body, { runValidators: true })

            res.send({ apiStatus: true, message: "edited POST", data: data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }


}
module.exports = Post