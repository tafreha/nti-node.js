const deal = require("./dealWithJson")
const heads = ["id", 'name', 'age', 'details']
const add = (argv) => {
        // const user = {
        // id: Date.now(),
        // 	name: argv.name,
        // 	age: argv.age,
        // 	details: argv.details,

        // }
        const user = {}
        heads.forEach(head => user[head] = argv[head])
        const allUser = deal.readFromJson()
        console.log(allUser)
        allUser.push(user)
        deal.writeToJson(allUser)
    }
    //console.log(user)
const showALL = () => {
    const allUser = deal.readFromJson()
    allUser.forEach((user, i) => {
        console.log(`${i+1}-${user.id}- ${user.name}`)
    })
}
const showSingle = (id) => {
    const allUser = deal.readFromJson()
    const user = allUser.find(user => user.id == id)
    if (!user) {
        return console.log('not found')
    }
    console.log(`${user.id}- ${user.name}`)
}

// const deleteUser = (id) => {
//     const allUser = deal.readFromJson()
//     const user = allUser.splice(user => user.id == id)
//     if (!user) {
//         return console.log('not found')
//     }
//     console.log("user deleted")
// }



module.exports = { add, showALL, showSingle, }