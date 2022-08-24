const bcryptjs = require("bcryptjs")
const build = async() => {
    const pass = "123456"
    const passencoded = await bcryptjs.hash(pass, 12)
    console.log(passencoded)
    const isvalid = await bcryptjs.compare(pass, passencoded)
    console.log(isvalid)
}
build()