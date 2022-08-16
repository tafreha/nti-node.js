const Customer = require("./controller/customer.controller")
const yargs = require("yargs")
const { demandOption } = require("yargs")
const { addTransaction } = require("./controller/customer.controller")
yargs.command({
    command: "add",
    builder: {
        accNum: {
            default: Date.now()
        },
        name: {
            type: "String",
            demandOption: true
        },
        userName: {
            type: "String",
            demandOption: true
        },
        initial_balance: {
            type: "Number",
            demandOption: true,
        },
        // remaining_balance: {
        //     type: "Number",
        //     default: 0
        // },
        transaction: {
            default: []
        },

    },
    handler: (argv) => Customer.addCustomer(argv)
})
yargs.command({
    command: "edit",
    builder: {
        accNum: { demandOption: true }
    },
    handler: (argv) => Customer.editCustomer(argv)
})
yargs.command({
    command: "del",
    builder: { accNum: { demandOption: true } },
    handler: (argv) => Customer.delCustomer(argv)
})
yargs.command({
    command: "showAll",
    handler: () => Customer.allCustomers()
})
yargs.command({
    command: "showSingle",
    builder: { accNum: { demandOption: true } },
    handler: (argv) => Customer.showCustomer(argv)
})
yargs.command({
    command: "addTransaction",
    builder: {
        accNum: { demandOption: true },
        transactionType: { demandOption: true },
        transBalance: { type: "Number", demandOption: true },
    },
    handler: (argv) => Customer.addTransaction(argv)
})
yargs.command({
    command: "rollBackTransaction",
    builder: {
        accNum: { demandOption: true },
        transactionId: { demandOption: true },
    },
    handler: (argv) => Customer.rollBackTransaction(argv)
})


yargs.argv