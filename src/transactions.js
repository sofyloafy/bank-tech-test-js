var histories = require('./transactionHistory.js').history
let history = new histories

class Transactions {
  constructor(){
    this.balance = 0
  }

  deposit(amount) {
    this.balance += amount
    console.log(this.balance)
    return `You have deposited £${amount}`

  }
  withdraw(amount) {
    this.balance -= amount
    console.log(this.balance)
    return `You have withdrawn £${amount}`
  }

}

module.exports.transactions = Transactions;
