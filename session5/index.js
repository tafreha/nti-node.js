const { argv } = require("process")
const { string } = require("yargs")
const yargs = require("yargs")
const user = require("./controller/user.controller")


yargs.command({
    command: "showSingle",
    builder: {

        id: {
            demandOption: true,
        }
    },
    handler:
        (argv) => user.showSingle(argv.id)



})

yargs.command({
    command: "delete",
    builder: {

        id: {
            demandOption: true,
        }
    },
    handler:
        (argv) => user.deleteUser(argv.id)



})
yargs.command({
    command: "add",
    builder: {
        id: { default: Date.now() },
        name: {
            type: "String",
            demandOption: true,
        },
        age: {
            type: "Number",
            demandOption: true,
        },
        details: {
            type: "String",
            default: "no details yet",
        },

    },
    handler: (argv) => user.add(argv)


})
yargs.command({
    command: "edit",
    handler: () => {
        console.log("edit")
    }


})
yargs.command({
    command: "showALL",
    handler: () => {
        user.showALL()
    }


})

yargs.argv