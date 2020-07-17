var transactions = require('./transactions.js').transactions
let transaction = new transactions

var statements = require('./statement.js').statement
let statement = new statements

var histories = require('./transactionHistory.js').history
let history = new histories


class BankAccount {

  deposit(amount) {
    history.depositTransaction(amount)
    console.log(history.transactionHistory)
    return transaction.deposit(amount)
  }

  withdraw(amount) {
    history.withdrawTransaction(amount)
    return transaction.withdraw(amount)

  }

  balance() {
    console.log(transaction.balance)
    return transaction.balance
  }

  print_statement(){
    console.log(history.transactionHistory)
    return statement.format(history.transactionHistory)

  }

}

module.exports.BankAccount = BankAccount;