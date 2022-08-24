const jwt = require("jsonwebtoken");
const userModule = require("../database/models/user.model")
const auth = async(req, res, next) => {
    try {
        const token = req.header("Authontication")
        const decoded = jwt.verify(token, process.env.jwtKEY)
        const user = await userModule.findOne({ _id: decoded._id, "tokens.token": token })
        if (!user) throw new Error("unauth")
        req.user = user
        req.token = token
        next()
    } catch (e) {
        res.send({ apiStatus: false, data: e, message: e.message })
    }
}
module.exports = auth