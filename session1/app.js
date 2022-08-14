// function getDataFromUser(message) {
//     return prompt(message);

// }
// // var name = getDataFromUser('enter your name ');
// // var age = getDataFromUser('enter your age')
// // alert(`welcome ${name}, your age is ${age}`)


// ///////////////////////////////////////////////////////
// // equation
// // const num1 = getDataFromUser('enter your first number ');
// // const eq = getDataFromUser('enter your operation ');
// // const num2 = getDataFromUser('enter your second number ');
// // function equation() {

// //     if (eq == "*") {
// //         alert(num1 * num2);
// //     } else if (eq == "/") {
// //         alert(num1 / num2);
// //     } else if (eq == "-") {
// //         alert(num1 - num2);
// //     } else if (eq == "+") {
// //         alert(num1 + num2);
// //     }

// // }

// // equation()


// // function sum(num1, num2) {
// //     return +num1 + +num2;
// // }

// // function sub(num1, num2) {
// //     return +num1 - +num2;
// // }


// // function mul(num1, num2) {
// //     return +num1 * +num2;
// // }


// // function div(num1, num2) {
// //     return +num1 / +num2;
// // }


// // function runner() {

// //     const Equation = getDataFromUser('enter your equation ');
// //     const data = Equation.split("")
// //     if (data[1] == '+') result = sum(data[0], data[2]);
// //     else if (data[1] == '-') result = sub(data[0], data[2]);
// //     else if (data[1] == '*') result = mul(data[0], data[2]);
// //     else if (data[1] == '/') result = div(data[0], data[2]);

// //     else return alert('invalid equation try again')
// //     alert(result)
// // }

// // runner()
// const result = [];
// addTask.addEventListener("submit", function(e) {
//     e.preventDefault()
//     var name = document.getElementById('name').value;
//     var age = document.getElementById('age').value;
//     result.push(name, age)
//     console.log(result);
//     document.getElementById("result").innerHTML = `your name is ${result[0]}, and your age is ${result[1]}
//     } `

// })

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
console.log(readFromStorage());