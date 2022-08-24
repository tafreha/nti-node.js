const express = require("express")
const app = express()

require("./database/connection")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRoutes = require("./routes/user.routes")
const blogRoutes = require("./routes/blog.routes")
app.use("/user",userRoutes)
app.use("/blog",blogRoutes)

module.exports = app