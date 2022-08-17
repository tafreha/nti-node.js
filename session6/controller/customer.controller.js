const { argv } = require("yargs")
const yargs = require("yargs")
const { readFromJson } = require("../../../NTI-G21/session6/controller/deal.controller")
const deal = require("./deal.controller")
const heads = ["accNum", "userName", "name", "initial_balance", "remaining_balance", "transaction"]

const checkUnique = (allUsers, val, key) => {
    const index = allUsers.findIndex(user => user[key] == val)
    return index
}
class Customer {
    static addCustomer = (data) => {
        const customer = {}
        heads.forEach(head => customer[head] = data[head])
        customer.remaining_balance = customer.initial_balance
        const allCustomers = deal.readFromJson();
        const index = checkUnique(allCustomers, customer.userName, "userName")
        if (index != -1) {
            return console.log("user name is found")
        }
        allCustomers.push(customer)
        deal.writeToJSON(allCustomers)
    }
    static editCustomer = (data) => {
        try {
            const customer = {}
            heads.forEach(head => {
                if (data[head] && head != "accNum") {
                    customer[head] = data[head]
                }
            })
            const allCustomers = deal.readFromJson()
            const index = checkUnique(allCustomers, data.accNum, "accNum")
            if (index == -1) return console.log("not found")
            console.log(customer)
            const userName = checkUnique(allCustomers, customer.userName, "userName")
            if (userName != -1 && userName != index) {
                return console.log("user name is used before")
            } else {
                for (const property in customer) {

                    allCustomers[index][property] = customer[property]

                }


            }

            deal.writeToJSON(allCustomers)
        } catch (e) {
            console.log(e.message)
        }


    }
    static addTransaction = (data) => {
        console.log("add trans")
        const allCustomers = deal.readFromJson()
        const index = checkUnique(allCustomers, data.accNum, "accNum")
        if (index == -1) return console.log("not found")
        if (data.transactionType == "withdraw") {
            console.log(1)

            allCustomers[index].remaining_balance -= +data.transBalance

        } else { allCustomers[index].remaining_balance += +data.transBalance }
        const transactions = {
            transactionId: Date.now(),
            transactionType: data.transactionType,
            transBalance: data.transBalance
        }
        allCustomers[index].transaction.push(transactions)

        console.log(allCustomers[index])
        deal.writeToJSON(allCustomers)

    }

    static rollBackTransaction = (data) => {
        try {
            const allCustomers = deal.readFromJson()
            const index = checkUnique(allCustomers, data.accNum, 'accNum')
            const transIndex = checkUnique(allCustomers[index].transaction, data.transactionId, 'transactionId')
            console.log(transIndex)
            if (index == -1 || transIndex == -1) return console.log("user or transaction is  not found")
            if (allCustomers[index].transaction[transIndex].transactionType == "withdraw") {
                allCustomers[index].remaining_balance += +allCustomers[index].transaction[transIndex].transBalance
            } else { allCustomers[index].remaining_balance -= +allCustomers[index].transaction[transIndex].transBalance }
            allCustomers[index].transaction.splice(transIndex, 1)
            console.log(allCustomers[index])
            deal.writeToJSON(allCustomers)
        } catch (e) {
            console.log(e.message)
        }
    }


    static delCustomer = (data) => {
        console.log("del")
        const allCustomers = deal.readFromJson()
        const index = checkUnique(allCustomers, data.accNum, 'accNum')
        if (index == -1) return console.log("user is found")
        allCustomers.splice(index, 1)
        deal.writeToJSON(allCustomers)


    }
    static showCustomer = (data) => {
        const allCustomers = deal.readFromJson()
        const index = checkUnique(allCustomers, data.accNum, 'accNum')
        if (index == -1) return console.log("user is found")
        console.log(allCustomers[index])

    }
    static allCustomers = () => {
        console.log(deal.readFromJson())
    }
}
module.exports = Customer