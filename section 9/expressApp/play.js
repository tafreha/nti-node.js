const { mongoClient } = require("mongodb")
const dbUrl = "mongodb://127.0.0.1:27017"
mongoClient.connect(dbUrl, {}, (err, client) => {

    if (err) return console.log(err.message)
    const db = client.db("g21")
        // db.collection("users").insertOne({
        //         name: "nouran",
        //         age: 23
        //     })
        //     .then(res => {
        //         console.log(res)
        //         client.close()
        //     })
        //     .catch(e => {
        //         console.log(e)
        //         client.close()
        //     })

    db.collection("images").insertMany(data)
        .then(res => {
            console.log(res)
            client.close()
        })
        .catch(e => {
            console.log(e)
            client.close()
        })
})