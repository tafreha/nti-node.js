const fs = require("fs")
class deal {
    static readFromJson = () => {
        let data;
        try {
            data = JSON.parse(fs.readFileSync("data.json"))
        } catch (e) {
            data = []
            console.log(e.message)
        }
        return data
    }
    static writeToJson = (data) => {
        fs.writeFileSync("data.json", JSON.stringify(data))
    }
    static getIndex = (allUsers, val, key) => {
        let index = allUsers.findIndex(user => user[key] == val)
        return index
    }
}
module.exports = deal