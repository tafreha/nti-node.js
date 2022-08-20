const express = require("express")
const hbs = require("hbs")
const path = require("path")

const app = express()
app.use(express.static(path.join(__dirname, "../public/static")))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../public/views"))
hbs.registerPartials(path.join(__dirname, "../public/layouts"))
app.use(express.urlencoded({ extended: true }))
const userRoutes = require("../routes/user.rout")
app.use(userRoutes)
module.exports = app