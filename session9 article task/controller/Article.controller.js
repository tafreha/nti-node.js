const { ObjectId } = require("mongodb")
const connection = require("../database/connect")
class Article {
    static addPost = (req, res) => {
        res.render("addPost", {
            pageTitle: " add new article"
        })
    }
    static addPostLogic = (req, res) => {
        let errors = {},
            hasError = false
        if (!req.body.title) {
            errors.title = "please enter article title"
            hasError = true

        }
        if (!req.body.content) {
            errors.content = "please enter article content"
            hasError = true

        }
        console.log(errors)
        if (hasError) {
            return res.render("addPost", { data: req.body, errors })
        }
        connection((err, db) => {
            if (err) return res.render("/error")
            db.collection("article").insertOne(req.body).then(() => res.redirect("/")).catch(e => res.redirect("/error"))
        })
    }
    static all = (req, res) => {
        connection((err, db) => {
            db.collection("article").find().toArray((e, articles) => {
                if (e) return res.render("error404")
                res.render("all", {
                    pageTitle: "all",
                    articles
                })
            })
        })
    }
    static edit = (req, res) => {
        const ArticleId = req.params.id
        connection((err, db) => {
            if (err) return res.send(err.message)
            db.collection("article").findOne({ _id: new ObjectId(ArticleId) }).then(article => {
                    res.render("edit", { pageTitle: "edit article", article })
                })
                .catch(e => res.send(e.message))
        })
    }
    static editLogic = (req, res) => {
        const ArticleId = req.params.id
        connection((err, db) => {
            if (err) return res.send(err.message)
            db.collection("article").updateOne({ _id: new ObjectId(ArticleId) }, {
                    $set: req.body
                })
                .then(article => {
                    res.redirect(`/single/${ArticleId}`)
                })
                .catch(e => res.send(e.message))
        })
    }
    static single = (req, res) => {
        const ArticleId = req.params.id

        connection((err, db) => {
            if (err) return res.send(err.message)
            db.collection("article").findOne({ _id: ObjectId(ArticleId) })
                .then(article => {
                    res.render("single", { pageTitle: "single", article })
                })
                .catch(e => res.send(e.message))
        })
    }
    static delete = (req, res) => {
        const ArticleId = req.params.id
        connection((err, db) => {
            if (err) return res.send(err.message)
            db.collection("article").deleteOne({ _id: new ObjectId(ArticleId) })
                .then(article => {
                    res.redirect("/")
                })
                .catch(e => res.send(e.message))
        })
    }

    static addComment = (req, res) => {

        const ArticleId = req.params.id
        connection((err, db) => {
            if (err) return res.send(err.message)
            db.collection("article").findOne({ _id: new ObjectId(ArticleId) }).then(article => {
                    res.render("addComment", { pageTitle: "Add a comment", article })
                })
                .catch(e => res.send(e.message))
        })




    }
    static addCommentLogic = (req, res) => {
        const ArticleId = req.params.id
        connection((err, db) => {
            if (err) res.render("error404")
            const article = db.collection("article").updateOne({ _id: new ObjectId(ArticleId) }, { $push: { comments: req.body } })

            .then((r) => {
                    res.redirect(`/single/${ArticleId}`)
                })
                .catch(e => res.send(e.message))

        })
    }

}
module.exports = Article