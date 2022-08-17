const express = require("express")
const app = express()
const path = require("path")
const port = 3000
const staticDire = path.join(__dirname, "static")
const viewsDir = path.join(__dirname, "frontEnd/views")
app.use(express.static(staticDire))
    //view engine hbs, ejs, pug,...
app.set("view engine", "hbs")
app.set("views", viewsDir)
    // app.get("/", (req, res) => {
    //     res.send("hello from express")
    // })
    // app.get("/about", (req, res) => {
    //     res.send({ name: "tafreha", age: 37 })
    // })
    // app.get("/contact", (req, res) => {
    //     res.send("<h3>hi</h3>")
    // })
    // app.get("/html", (req, res) => {
    //     // const fileLock = `${__dirname}/b.html`
    //     const fileLock = `${__dirname}/1.png`
    //     res.sendFile(fileLock)
    // })
app.get("/", (req, res) => {
    res.render("home")

})
app.get("/about", (req, res) => {
    res.render("about")
})
app.listen(port, () => console.log(`we arr on http://localhost:${port}`))