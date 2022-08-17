const deal = require("../controller/deal.controller")

class user {

    static add = (req, res) => {
        // res.send(req.query)
        if (req.query.name || req.query.age || req.query.email) {
            if (!req.query.name || !req.query.age || !req.query.email) {
                const errors = {}
                if (!req.query.name) errors.name = "please add a name"
                if (!req.query.age) errors.age = "please add a age"
                if (!req.query.email) errors.email = "please add email"

                res.render("add", {
                    data: req.query,
                    errors

                })

            } else {
                const users = deal.readFromJson()
                users.push({ id: Date.now(), ...req.query })
                deal.writeToJSON(users)
                res.redirect("/")
            }

        } else
            res.render("add", {
                pageTitle: "add new user"
            })
    }
    static addPost = (req, res) => {
        res.render("addPost", {
            pageTitle: "add user post"
        })
    }
    static addPostLogic = (req, res) => {
        let errors = {},
            hasError = false
        if (!req.body.name) {

            errors.name = "please add a name"
            hasError = true
        }
        if (!req.body.age) {

            errors.age = "please add a age"
            hasError = true
        }
        if (!req.body.email) {

            errors.email = "please add email"
            hasError = true
        }
        console.log(errors)
        if (hasError) return
        res.render("addPost", {
            data: req.body,
            errors

        })


    }
    static edit = (req, res) => {
        const user = { name: "marwa", age: 37, email: "marwa@techsexperts.com" }
        res.render("edit", {
            pageTitle: "Edit user",
            user
        })
    }

    static all = (req, res) => {
        res.render("all", {
            pageTitle: "Home Page",
            pageContent: "hello from page 0"
        })
    }

    static single = (req, res) => {
        res.render("single", {
            pageTitle: "single user"
        })
    }
    static del = (req, res) => {
        res.render("del", {
            pageTitle: "single user"
        })
    }
}
module.exports = user