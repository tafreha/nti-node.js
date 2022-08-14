const AddUser = document.querySelector("#userBalance")
const userWrap = document.querySelector("#userWrap")
const userHeads = [
    { key: "id", default: Date.now() },
    { key: "userName", default: null },
    { key: "balance", default: null },
    { key: "transaction", default: null }
]

const addFun = (e) => {
    e.preventDefault()
    const allUsers = readFromStorage()
    const data = {}
    userHeads.forEach(head => {
        if (head.default == null) data[head.key] = AddUser.elements[head.key].value
        else data[head.key] = head.default
    })
    allUsers.push(data)
    writeToStorage(allUsers)
    AddUser.reset()
    window.location.href = "index.html"
}
const readFromStorage = (storageKey = "userBalance", option = "array") => {
    let data
    try {
        data = localStorage.getItem(storageKey)
        if (option != "string") data = JSON.parse(data) || []
        if (!Array.isArray(data) && option == "array") throw new Error("invalid")
    } catch (e) {
        data = []
    }
    return data
}
const writeToStorage = (data, storageKey = "userBalance") => localStorage.setItem(storageKey, JSON.stringify(data))
const createMyOwnElement = (el, parent, classes, txt = null) => {
    const myEle = document.createElement(el)
    parent.appendChild(myEle)
    myEle.classList = classes;
    if (txt) myEle.textContent = txt
    return myEle
}
const drawSingleUser = (container, user, i, allUsers) => {
    const d1 = createMyOwnElement("div", container, "col-4")
    let c
    const d2 = createMyOwnElement("div", d1, c)
    userHeads.forEach(head => createMyOwnElement("h3", d2, "", user[head.key]))
    const showBtn = createMyOwnElement("button", d2, "btn btn-success m-2", "show")
    const withdrawal = createMyOwnElement("button", d2, "btn btn-primary m-2", "change status")
    showBtn.addEventListener("click", () => console.log(i))
    withdrawal.addEventListener("click", () => console.log(i))
}
const drawData = (allUsers) => {
    userWrap.innerHTML = " "
    allUsers.forEach((user, i) => drawSingleUser(userWrap, user, i, allUsers))
}

if (AddUser) AddUser.addEventListener("submit", addFun)

if (userWrap) {
    const allUsers = readFromStorage()

    drawData(allUsers)
}