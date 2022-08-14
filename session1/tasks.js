function readFromStorage() {
    let data
    try {
        data = JSON.parse(localStorage.getItem('task')) || []
        if (!Array.isArray(data)) throw new Error("invalid")
    } catch (e) {
        data = []
    }
    return data
}

function writeToStorage() {
    localStorage.setItem("tasks", JSON.stringify(data))
}
const addTask = document.querySelector('#addTask')
const taskHeads = ["name", "age"]
addTask.addEventListener("submit", function(e) {
    e.preventDefault()
    const allTask = readFromStorage()

    const data = {
        id: Date.now(),
        status: false,

    }
    taskHeads.forEach(head => data[head] = addTask.elements[head].value)
    console.log(data)
    allTask.push(data)
        // addTask.reset()
        // window.location.href = "index.html"

})