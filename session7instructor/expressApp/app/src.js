const express = require("express")
const path = require("path")
const hbs = require("hbs")

// const deal = require("../controller/deal.controller")

const app = express()
    // const viewDir = path.join(__dirname, "../public/views")
    // const staticDir = path.join(__dirname, "../public/static")
app.use(express.static(path.join(__dirname, "../public/static")))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../public/views"))
hbs.registerPartials(path.join(__dirname, "../public/layouts"))
app.use(express.urlencoded({ extended: true }))
const userRouter = require("../routes/user.routes")
app.use(userRouter)

app.all("*", (req, res) => {
    res.render("err404", {
        pageTitle: "Not found"
    })
})
module.exports = app