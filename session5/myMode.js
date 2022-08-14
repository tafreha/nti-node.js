const func1 = () => {
    console.log("fun 1 in myMode.js")
}
const func2 = () => {
        console.log("fun 2 in myMode.js")
    }
    // module.exports = func1
module.exports = { func1, func2 }