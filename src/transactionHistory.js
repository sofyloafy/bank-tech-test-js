

class TransactionHistory {
  constructor(){
    this.transactionHistory = []
  }

  depositTransaction(amount, balance){
    var transaction = {
      date: new Date().toDateString(),
      credit: `${amount.toFixed(2)}`,
      debit: '------',
      balance: `${balance.toFixed(2)}`
    }
    this.transactionHistory.push(transaction)
    return `You have deposited £${amount}`
  }

  withdrawTransaction(amount, balance){
    var transaction = {
      date: new Date().toDateString(),
      credit: '------',
      debit: `${amount.toFixed(2)}`,
      balance: `${balance.toFixed(2)}`
    }
    this.transactionHistory.push(transaction)
    return `You have withdrawn £${amount}`
  }
}

module.exports.history = TransactionHistory;