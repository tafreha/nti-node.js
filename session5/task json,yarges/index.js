const yargs = require("yargs")
const task = require("./taskController")
const dueDateCalculator = require('due-date-calculator')
const { argv } = require("yargs")
const submitDate = new Date('2022-8-14')
const turnaround = 48
const dueDate = dueDateCalculator(submitDate, turnaround)
    // returns 2016.11.24. 14:40

yargs.command({
    command: "add",
    builder: {
        id: {
            default: Date.now(),
        },
        title: {
            type: "String",
            demandOption: true,
        },
        content: {
            type: "String",
            default: "no details yet",
        },
        status: {
            type: "String",
            default: "false",
        },
        dueDate: {
            default: dueDate
        },
    },
    handler:
        (argv) => task.add(argv)


})
yargs.command({
    command: "read",
    handler: () => {
        task.read();
    }
})
yargs.command({
    command: "readSingle",
    builder: {
        id: {
            demandOption: true
        },

    },
    handler:
        (argv) => task.readSingle(argv.id)
})
yargs.argv