const deal = require("./dealWithJson")
const heads = ["id", "title", "content", "dueDate", "status"]

const add = (argv) => {
    const task = {}
    heads.forEach(head => task[head] = argv[head])
    const allTasks = deal.readFromJson()
        // console.log(allTasks)
    allTasks.push(task)
    deal.writeToJson(allTasks)
}

const read = () => {
    const allTasks = deal.readFromJson()
    allTasks.forEach((task, index) => {
        console.log(`${index+1}: ${task.title}-- ${task.dueDate}-- ${task.content}`)
    })
}

const readSingle = (id) => {
    const allTasks = deal.readFromJson()
    const task = allTasks.find(task => task.id == id)
    if (!task) {
        console.log("not found")
    }
    console.log(`${task.title},${task.content}`)
}

const edit = () => {

}

module.exports = { add, read, readSingle }