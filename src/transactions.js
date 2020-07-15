const transactionHistory = require('../src/transactionHistory.js')
var history = new transactionHistory.history

class Transactions {
  constructor(){
    this.balance = 0
  }

  deposit(amount) {
    this.balance += amount
    history.depositTransaction(amount)
    return `You have deposited £${amount}`

  }
  withdraw(amount) {
    this.balance -= amount
    history.withdrawTransaction(amount)
    return `You have withdrawn £${amount}`
  }

  balance(){
    return this.balance
  }

}

module.exports.transactions = Transactions;
