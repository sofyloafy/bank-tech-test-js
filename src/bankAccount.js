var transactions = require('./transactions.js').transactions
let transaction = new transactions

var statements = require('./statement.js').statement
let statement = new statements

var histories = require('./transactionHistory.js').history
let history = new histories


class BankAccount {

  deposit(amount) {
    transaction.deposit(amount)
    return history.depositTransaction(amount, this.balance())
  }

  withdraw(amount) {
    transaction.withdraw(amount)
    return history.withdrawTransaction(amount, this.balance())

  }

  balance() {
    return transaction.balance
  }

  printStatement(){
    console.log(statement.format(history.transactionHistory))

  }

}

module.exports.BankAccount = BankAccount;