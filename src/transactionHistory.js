const deposit = require('../src/transactions.js')
var transactions = new deposit.deposit

class TransactionHistory {
  constructor(){
    this.transactionHistory = []
    this.balance = 0
  }

  depositTransaction(){
    var transaction = {
      date: new Date().toDateString(),
      credit: `£`+5,
      debit: '------',
      balance: `£`+5
    }
    this.transactionHistory.push(transaction)
  }

  store(){
    return 'hello'
    // transaction_history.push(transaction)
  }
}

module.exports.history = TransactionHistory;