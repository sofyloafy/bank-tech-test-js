var transactions = require('./transactions.js').transactions
let transaction = new transactions

class BankAccount {

  deposit(amount) {
    console.log(transaction.deposit(5))
    return transaction.deposit(amount)
  }

}

module.exports.BankAccount = BankAccount;