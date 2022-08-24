const express = require("express")

const app = express()
require("../database/connect")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRoutes = require("../routes/user.route")
const postRoutes = require("../routes/post.route")
app.use("/user", userRoutes)
app.use("/post", postRoutes)


module.exports = app