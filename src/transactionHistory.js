const deposit = require('../src/transactions.js')
var transactions = new deposit.deposit

class TransactionHistory {
  constructor(){
    this.transactionHistory = []
    this.balance = 0
  }

  depositTransaction(amount){
    var transaction = {
      date: new Date().toDateString(),
      credit: `£${amount}`,
      debit: '------',
      balance: `£${amount}`
    }
    this.transactionHistory.push(transaction)
  }

  withdrawTransaction(amount){
    var transaction = {
      date: new Date().toDateString(),
      credit: '------',
      debit: `£${amount}`,
      balance: `£${amount}`
    }
    this.transactionHistory.push(transaction)
  }
}

module.exports.history = TransactionHistory;