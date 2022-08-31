const userModel = require("../database/models/user.model")
class User {
    static index = async(req, res) => {
        try {
            const data = await userModel.find()
            res.status(200).send({ apiStatus: true, message: "all users fetched", data })
        } catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static create = async(req, res) => {
        try {
            const userData = new userModel(req.body)
            await userData.save()
            res.status(200).send({ apiStatus: true, message: "user registered", data: userData })
        } catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static single = async(req, res) => {
        try {
            const data = await userModel.findById(req.params.id)
            res.status(200).send({ apiStatus: true, message: "all users fetched", data })
        } catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message, data: e })
        }

    }
    static edit = async(req, res) => {
        try {
            const data = await userModel.findByIdAndUpdate(
                req.params.id,
                req.body, { runValidators: true }
            )
            res.status(200).send({ apiStatus: true, message: "all users fetched", data })
        } catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message, data: e })
        }

    }
    static delete = async(req, res) => {
        try {
            const data = await userModel.findByIdAndDelete(req.params.id)
            res.status(200).send({ apiStatus: true, message: "all users fetched", data })
        } catch (e) {
            res.status(200).send({ apiStatus: false, message: e.message, data: e })
        }

    }
    static login = async(req, res) => {
        try {
            const userData = await userModel.login(req.body.email, req.body.password)
            const token = await userData.generateToken()
            res.status(200).send({
                apiStatus: true,
                message: "logged in",
                data: { userData, token }
            })
        } catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static profile = (req, res) => {
        res.status(200).send({
            apiStatus: true,
            message: "done",
            data: req.user
        })
    }
    static activate = async(req, res) => {
        try {
            req.user.status = true
            await req.user.save()
            res.status(200).send({
                apiStatus: true,
                message: "done",
                data: req.user
            })
        } catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static logout = async(req, res) => {
        try {
            req.user.tokens = req.tokens.filter(t => t.token != req.token)
            await req.user.save()
            res.status(200).send({
                apiStatus: true,
                message: "done",
                data: req.user
            })
        } catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static logoutAll = async(req, res) => {
        try {
            req.user.tokens = []
            await req.user.save()
            res.status(200).send({
                apiStatus: true,
                message: "done",
                data: req.user
            })
        } catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message, data: e })
        }

    }
    static editMyData = async(req, res) => {
        try {
            for (let prop in req.body) {
                req.user[prop] = req.body[prop]
            }
            await req.user.save()
            res.status(200).send({ apiStatus: true, message: "all users fetched", data: req.user })
        } catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message, data: e })
        }

    }

}
module.exports = User