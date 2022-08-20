const { MongoClient } = require("mongodb")
const dbUrl = "mongodb://127.0.0.1:27017"
const myConnection = (cb) => {
    // MongoClient.connect(dbUrl, {}, (err, client) => {
    MongoClient.connect(dbUrl, {}, (err, client) => {

        if (err) return cb(err, false)
        const connection = client.db("g21db")
        cb(false, connection)
    })

}
module.exports = myConnection