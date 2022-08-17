const { hasSubscribers } = require("diagnostics_channel")
const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
    // const viewsDir = path.join(__dirname, "public/views")
    // const staticDir = path.join(__dirname, "public/static")

app.use(express.static(path.join(__dirname, "../public/static")))
    //view engine hbs, ejs, pug,...
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../public/views"))
hbs.registerPartials(path.join(__dirname, "../public/layouts"))
app.get("/", (req, res) => {
    res.render("all", {
        pageTitle: "home page",
        pageContent: "hello from page 0"
    })

})
app.get("/error", (req, res) => {
    res.render("error", {
        pageTitle: "error404",
        pageContent: " error page"
    })
})
app.get("/add", (req, res) => {
    res.render("add", {
        pageTitle: "add new user",
        pageContent: "add new user"
    })
})
app.get("/edit/:id", (req, res) => {
    res.render("edit", {
        pageTitle: "edit user",
        pageContent: "edit user"
    })
})
app.get("/single", (req, res) => {
    res.render("single", {
        pageTitle: "single user",
        pageContent: "single user"
    })
})
app.all("*", (req, res) => {
    res.render("error", {
        pageTitle: "page not found",
        pageContent: "page not found error 404 "
    })
})
module.exports = app