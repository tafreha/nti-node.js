const userModel = require("../database/models/user.model")

class User {
    static index = async(req, res) => {
        try {
            // const userId = jwt.auth
            const data = await userModel.find()
            res.send({ apiStatus: true, message: "all users fetched", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static create = async(req, res) => {

        try {
            const userData = new userModel(req.body)
            await userData.save()
            res.send({ apiStatus: true, message: "user registered", data: userData })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static single = async(req, res) => {
        try {
            const data = await userModel.findById(req.params.id)
            res.send({ apiStatus: true, message: "all users fetched", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }

    }
    static edit = async(req, res) => {
        try {
            const data = await userModel.findByIdAndUpdate(
                req.params.id,
                req.body, { runValidators: true }
            )
            res.send({ apiStatus: true, message: "all users fetched", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }

    }
    static delete = async(req, res) => {
        try {
            const data = await userModel.findByIdAndDelete(req.params.id)
            res.send({ apiStatus: true, message: "all users fetched", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }

    }
    static login = async(req, res) => {
        try {
            const userData = await userModel.login(req.body.userName, req.body.password)
            const token = await userData.generateToken()
            res.send({
                apiStatus: true,
                message: "logged in",
                data: { userData, token }
            })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static profile = (req, res) => {
        res.send({
            apiStatus: true,
            message: "done",
            data: req.user
        })
    }
    static activate = async(req, res) => {
        req.user.status = true
        await req.user.save()
        res.send({
            apiStatus: true,
            message: "done",
            data: req.user
        })
    }
    static upImg = async(req, res) => {
        req.user.userImage = req.file.filename
        await req.user.save()
        res.send(req.user)
    }
}
module.exports = User