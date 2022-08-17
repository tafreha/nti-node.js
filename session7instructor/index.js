//npm i express
//path
const express = require("express")
const app = express()
const path = require("path")
const PORT = 3000
//route => request, response, keyword
const staticDir = path.join(__dirname, "static")//`${__dirname}/static`
const viewsDir = path.join(__dirname, "frontend/views")//`${__dirname}/static`
app.use( express.static(staticDir))
//view engine  hbs, ejs, pug,....
app.set("view engine", "hbs")
app.set("views", viewsDir)
app.get("/", (req, res)=>{
    res.send("hello from express")
})
app.get("/about", (req, res)=>{
    res.send({name:"marwa", age:37})
})
app.get("/contact", (req, res)=>{
    res.send("<h3>hi</h3>")
})
app.get("/html", (req,res)=>{
    const fileLoc= `${__dirname}/ecommerce.gif`
    res.sendFile(fileLoc)
})
app.get("/hbs", (req,res)=>{
    res.render("home")
})
app.listen(PORT, ()=> console.log(`we are on http://localhost:${PORT}`)) // localhost:3000
//npm i -g nodemon
//nodemon index