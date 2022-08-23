require("dotenv").config()
console.log(process.env.PORT)
const port = process.env.PORT || 3000
const app = require("./app/src")

app.listen(port, () => console.log(`http://localhost:${port}`))