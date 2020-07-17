var transactions = require('./transactions.js').transactions
let transaction = new transactions

var statements = require('./statement.js').statement
let statement = new statements

var histories = require('./transactionHistory.js').history
let history = new histories


class BankAccount {

  deposit(amount) {
    history.depositTransaction(amount)
    return transaction.deposit(amount)
  }

  withdraw(amount) {
    history.withdrawTransaction(amount)
    return transaction.withdraw(amount)

  }

  balance() {
    return transaction.balance
  }

  printStatement(){
    return statement.format(history.transactionHistory)

  }

}

module.exports.BankAccount = BankAccount;