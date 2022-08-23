const userModule = require("../database/models/user.model")
class User {
    static index = async(req, res) => {
        try {
            const data = await userModule.find()
            res.send({ apiStatus: true, message: "all user fetched", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static create = async(req, res) => {
        try {
            const userDate = new userModule(req.body)
            await userDate.save()
            res.send({ apiStatus: true, message: "user registered", data: userDate })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static single = async(req, res) => {
        try {
            const userId = req.params.id
            const data = await userModule.findById(userId)
            res.send({ apiStatus: true, message: "user fetched", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static delete = async(req, res) => {
        try {
            const userId = req.params.id
            const data = await userModule.findByIdAndDelete(userId)
            res.send({ apiStatus: true, message: "user DELETED", data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static edit = async(req, res) => {
        try {
            const userId = req.params.id
            const data = await userModule.findByIdAndUpdate(userId, req.body, { runValidators: true })

            res.send({ apiStatus: true, message: "edited user", data: data })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
}

module.exports = User