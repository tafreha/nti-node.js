// const bcryptjs = require("bcryptjs")
// const build = async ()=>{
//     const pass ="123456"
//     const passEncoded = await bcryptjs.hash(pass, 12)
//     console.log(passEncoded);
//     const isValid = await bcryptjs.compare(pass, passEncoded)
//     console.log(isValid);
// }
// build()
const jwt = require("jsonwebtoken")
const id = "63048755cc0f5255eb58809f"
const token = jwt.sign({ _id : id }, "myPass")
console.log(token)
const decoded = jwt.verify(token, "myPass")
console.log(decoded);

