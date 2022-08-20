const deal = require("./deal.controller")
class user {

    static add = (req, res) => {
        if (req.query.name || req.query.email) {
            if (!req.query.name || !req.query.email) {
                let errors = {}
                if (!req.query.name) errors.name = "please enter your name"
                if (!req.query.email) errors.email = "please enter your email"
                res.render("add", { data: req.query, errors })

            } else {
                const user = deal.readFromJson()
                    // res.send(user)
                user.push({ id: Date.now, ...req.query })
                deal.writeToJson(user)
                res.redirect("/")
            }
        } else {
            res.render("add", { pageTitle: "add new user" })
        }
    }
}
module.exports = user