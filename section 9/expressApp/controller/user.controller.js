const Connection = require("../dataBase/connect")
class User {
    static add = (req, res) => {
        if (req.query.name || req.query.age || req.query.email) {
            if (!req.query.name || !req.query.age || !req.query.email) {
                const errors = {}
                if (!req.query.name) errors.name = "please add a name"
                if (!req.query.age) errors.age = "please add a age"
                if (!req.query.email) errors.email = "please add a email"
                res.render("add", { data: req.query, errors })
            } else {
                Connection((err, db) => {

                    db.collection('users').insertOne(req.query)
                        .then(() => res.redirect("/"))
                        .catch(e => res.render("error 404"))
                })
            }
        } else
            res.render("add", {
                pageTitle: "add new user"
            })
    }

}
module.exports = User