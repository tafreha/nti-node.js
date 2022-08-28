const jwt = require("jsonwebtoken")
const userModel = require("../database/models/user.model")
const auth = async(req, res, next) => {
    try {
        const token = req.header("authentication")
        const decoded = jwt.verify(token, process.env.JWTKEY)
        const user = await userModel.findOne({ _id: decoded._id, "tokens.token": token })
        if (!user) throw new Error("unauth")
        req.user = user
        req.token = token
        next()
    } catch (e) {
        res.send({
            apiStatus: false,
            data: e,
            message: e,
            message
        })
    }
}
module.exports = auth