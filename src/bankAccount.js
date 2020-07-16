var transactions = require('./transactions.js').transactions
let transaction = new transactions

class BankAccount {

  deposit(amount) {
    console.log(transaction.deposit(5))
    return transaction.deposit(amount)
  }

  deposit(amount) {
    console.log(transaction.deposit(5))
    return transaction.deposit(amount)
  }

  balance() {
    console.log(transaction.balance)
    return transaction.balance
  }

}

module.exports.BankAccount = BankAccount;