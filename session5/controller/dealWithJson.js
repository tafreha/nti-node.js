const fs = require("fs")
const readFromJson = () => {
        let data
        try {
            data = JSON.parse(fs.readFileSync("data.json"))

        } catch (e) {
            data = []
        }
        return data
    }
    // console.log(readFromJson())



// const data = [{
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
// }, ]

const writeToJson = (data) => {

    fs.writeFileSync('data.json', JSON.stringify(data))
}
module.exports = { writeToJson, readFromJson }