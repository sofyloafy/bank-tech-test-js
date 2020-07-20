

class TransactionHistory {
  constructor(){
    this.transactionHistory = []
  }

  depositTransaction(amount, balance){
    var transaction = {
      date: new Date().toDateString(),
      credit: `£${amount}`,
      debit: '------',
      balance: `£${balance}`
    }
    this.transactionHistory.push(transaction)
    return `You have deposited £${amount}`
  }

  withdrawTransaction(amount, balance){
    var transaction = {
      date: new Date().toDateString(),
      credit: '------',
      debit: `£${amount}`,
      balance: `£${balance}`
    }
    this.transactionHistory.push(transaction)
    return `You have withdrawn £${amount}`
  }
}

module.exports.history = TransactionHistory;