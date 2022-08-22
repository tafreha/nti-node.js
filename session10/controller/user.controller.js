const userModule = require("../database/models/user.model")
class User {

    static addPost = (req, res) => {
        res.render("addPost", { pageTitle: "add user post" })
    }
    static addPostLogic = async(req, res) => {
        try {
            const userData = new userModule(req.body)
            await userData.save()
            res.redirect("/")
        } catch (e) {
            // res.send("addPost", e.error)
            res.render("addPost", { e: e.errors, pageTitle: "add users" })
        }
    }
    static all = async(req, res) => {
        try {
            const users = await userModule.find()
                // res.send(users)
            res.render("all", {
                pageTitle: "all users",
                hasUser: users.length,
                users
            })
        } catch (e) {
            res.send(e)
        }

    }
    static edit = async(req, res) => {
        const userId = req.params.id
        try {
            const user = await userModule.findById(userId)
                //res.send(user)
            res.render("edit", {
                user,
                pageTitle: "edit user"
            })
        } catch (e) {
            res.send(e)
        }
    }
    static editLogic = async(req, res) => {
        const userId = req.params.id
        try {
            const user = await userModule.findById(userId)
            for (let prop in req.body) {
                user[prop] = req.body[prop]
            }
            await user.save()
            res.redirect(`/single/${userId}`)
        } catch (e) {
            res.send(e)
        }
    }
    static single = async(req, res) => {
        const userId = req.params.id
        try {
            const user = await userModule.findById(userId)
                //res.send(user)
            res.render("single", {
                user,
                pageTitle: "single user"
            })
        } catch (e) {
            res.send(e)
        }
    }
    static del = async(req, res) => {
        const userId = req.params.id
        try {
            const user = await userModule.findByIdAndDelete(userId)

            res.redirect("/")
        } catch (e) {
            res.send(e)
        }
    }

    static addAddress = async(req, res) => {
        const userId = req.params.id
        res.render("addAddress", { userId })
    }

    static addAddressLogic = async(req, res) => {
        const userId = req.params.id


        try {
            const user = await userModule.findById(userId)

            user.addresses.push(req.body)
            console.log(user.addAddresses)
            await user.save()
            res.redirect(`/single/${userId}`)
        } catch (e) {
            res.send(e.message)
        }
    }
}

module.exports = User