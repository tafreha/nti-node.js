// const fileSystem = require("fs")
//     // fileSystem.writeFileSync('x.txt', 'hello')
//     // fileSystem.renameSync("x.txt", "m.txt")
// const data = [{
//             "albumId": 1,
//             "id": 1,
//             "title": "accusamus beatae ad facilis cum similique qui sunt",
//             "url": "https://via.placeholder.com/600/92c952",
//             "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//         },
//         {
//             "albumId": 1,
//             "id": 2,
//             "title": "reprehenderit est deserunt velit ipsam",
//             "url": "https://via.placeholder.com/600/771796",
//             "thumbnailUrl": "https://via.placeholder.com/150/771796"
//         },
//         {
//             "albumId": 1,
//             "id": 3,
//             "title": "officia porro iure quia iusto qui ipsa ut modi",
//             "url": "https://via.placeholder.com/600/24f355",
//             "thumbnailUrl": "https://via.placeholder.com/150/24f355"
//         },
//         {
//             "albumId": 1,
//             "id": 4,
//             "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//             "url": "https://via.placeholder.com/600/d32776",
//             "thumbnailUrl": "https://via.placeholder.com/150/d32776"
//         },
//         {
//             "albumId": 1,
//             "id": 5,
//             "title": "natus nisi omnis corporis facere molestiae rerum in",
//             "url": "https://via.placeholder.com/600/f66b97",
//             "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
//         },
//         {
//             "albumId": 1,
//             "id": 6,
//             "title": "accusamus ea aliquid et amet sequi nemo",
//             "url": "https://via.placeholder.com/600/56a8c2",
//             "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
//         },
//     ]
//     // fileSystem.writeFileSync('x.txt', JSON.stringify(data))
// fileSystem.writeFileSync('x.txt', JSON.stringify(data), () => {})
// const result = fileSystem.readFileSync('m.txt')
// const result1 = fileSystem.readFileSync('x.txt')

const { require } = require("yargs");

// console.log(result.toString())
// console.log(JSON.parse(result1))

// const mod = require("./myMode")
//     // mod()
// mod.func1();
// mod.func2();

// var validator = require('validator');

// console.log(validator.isMobilePhone("0110343217", ['ar-EG']))

// var chalk = require('chalk')
// console.log(chalk.blue('hello'))
// console.log(chalk.red('hello'), chalk.magenta('world'))

// console.log(+process.argv[2] + +process.argv[3])
const yargs = require("yargs")
yargs.command({
    command: "sub",
    handler: function() {
        console.log("sub")
    }

})
yargs.command({
    command: "add",
    handler: function() {
        console.log("add")
    }

})
yargs.argv