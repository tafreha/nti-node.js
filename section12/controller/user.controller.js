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
        // static login = async(req, res) => {

    //     try {
    //         const data = await userModule.findOne({ email: req.body.email })
    //         res.send({ apiStatus: true, message: " user", data })
    //         const result = bcrypt.compare(req.body.password, user.password, function(err, res) {
    //             if (err) {
    //                 res.send({ apiStatus: false, message: e.message, data: e })

    //             }
    //             if (res) {
    //                 res.send({ apiStatus: true, message: "login user", result })

    //             } else {
    //                 // response is OutgoingMessage object that server response http request
    //                 return response.json({ success: false, message: 'passwords do not match' });
    //             }
    //         });

    //     } catch (e) {
    //         res.send({ apiStatus: false, message: e.message, data: e })

    //     }


    // }
    static login = async(req, res) => {

        try {
            const userData = await userModule.login(req.body.email, req.body.password)
            const token = await userData.generateToken()


            res.send({ apiStatus: true, message: "login user", data: { userData, token } })


        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
    static profile = async(req, res) => {
        res.send({
            apiStatus: true,
            message: "done",
            data: req.user
        })
    }
    static activate = async(req, res) => {
        try {
            req.user.status = true
            await req.user.save()

            res.send({
                apiStatus: true,
                message: "done",
                data: req.user
            })
        } catch (e) {
            res.send({ apiStatus: false, message: e.message, data: e })
        }
    }
}

module.exports = User