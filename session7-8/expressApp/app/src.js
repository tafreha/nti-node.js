const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()
// const viewDir = path.join(__dirname, "../public/views")
// const staticDir = path.join(__dirname, "../public/static")
app.use(express.static(path.join(__dirname, "../public/static")))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../public/views"))
hbs.registerPartials(path.join(__dirname, "../public/layouts"))
app.use(express.urlencoded({extended:true}))
const userRoutes = require("../routes/user.route")
app.use(userRoutes)

app.get("/addTask", (req,res)=>{
    res.render("addTask")
})
app.post("/addTask", (req,res)=>{
    res.send(req.body)
})

// app.all("*", (req, res)=>res.render("err404", { pageTitle:"Not found" }))
module.exports = app