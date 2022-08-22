const mongoose = require("mongoose")
dbUrl = "mongodb://127.0.0.1:27017/g21s10"
mongoose.connect(dbUrl)
const userModel = mongoose.model("user", {
        name: {
            type: String,
            trim: true
        },
        age: { type: Number },
        email: {
            type: String,
            trim: true
        }
    })
    // const myData = new userModel({ name: "tafreha", age: 30, email: "tafreha@test.com" })
    // console.log(myData)
    // myData.save()
    //     .then(res => console.log(res))
    //     .catch(e => console.log(e.message))
userModel.find().then(res => console.log(res)).catch(e => console.log(e.message))