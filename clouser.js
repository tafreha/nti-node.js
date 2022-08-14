// const c1 = (x) => {
//     return {
//         x,
//         enc() {
//             return ++x
//         },
//         dec() { return --x },
//     }
// }
// let myVar = c1(4)
// console.log(myVar.x)
// console.log(myVar.dec())
// console.log(myVar.enc())
// setTimeout(() => {
//     console.log(1)

// }, 2000);
// setTimeout(() => {
//     console.log(2)

// }, 1000);
// setTimeout(() => {
//     console.log(3)

// }, 1500);
// console.log(4)
// let apiUrl = "https://jsonplaceholder.typicode.com/posts?_limit=15"
// const apiRequest = async(apiUrl) => {
//     try {
//         const data = await (await fetch(apiUrl)).json()
//         console.log(data)
//     } catch (e) {
//         console.log(e)
//     }
//     //     fetch(apiUrl)
//     //         .then(result => {
//     //             result.json()
//     //                 .then(data => console.log(data))
//     //         })
//     //         .catch(err => console.log(err))
// }
// apiRequest(apiUrl)


const result = document.querySelector("#result")
const photos = document.querySelector("#photos")
const posts = document.querySelector("#posts")
const users = document.querySelector("#users")
let url = "https://jsonplaceholder.typicode.com/photos?_limit=10"

const createMyEle = (parent, element, classes, content) => {
    const myEle = document.createElement(element)
    parent.appendChild(myEle)
    if (element == "img") myEle.src = content
    else myEle.innerHtml = content
    myEle.classList = classes
    return myEle;

}
const drawData = (data) => {
    result.innerHtml = ""
    data.forEach(img => {
        const d1 = createMyEle(result, "div", "col-4", "")
        const d2 = createMyEle(result, "div", "m-2 border border-3", "")
        createMyEle(d2, "img", "img-fluid", img.url)
        createMyEle(d2, "h4", "text-center text-primary", img.title)



    })
}
const apiReq = async(url, callback) => {
    try {
        const data = await (await fetch(url)).json()
        callback(data, false)
    } catch (e) {
        callback(false, e)
    }

}

photos.addEventListener("click", () => apiReq("https://jsonplaceholder.typicode.com/photos?_limit=10", (data, err) => {
    if (err) return createMyEle(result, "div", "alert alert-danger", err)
    drawData(data)
}))

posts.addEventListener("click", () => apiReq("https://jsonplaceholder.typicode.com/posts?_limit=10", (data, err) => {
    if (err) return createMyEle(result, "div", "alert alert-danger", err)
    drawData(data)
}))
users.addEventListener("click", () => apiReq("https://jsonplaceholder.typicode.com/users?_limit=10", (data, err) => {
    if (err) return createMyEle(result, "div", "alert alert-danger", err)
    drawData(data)
}))