const mongoose = require("mongoose")
dbUrl = "mongodb://127.0.0.1:27017/tests10"
mongoose.connect(dbUrl)
const userModel = require("./database/models/user.model")
const data = new userModel({
    name: "marwaA",
    email: "MARWA@TEST.COM",
    password: "malek @297"
})

data.save().then(d => console.log(d)).catch(e => console.log(e))