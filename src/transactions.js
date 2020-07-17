class Transactions {
  constructor(){
    this.balance = 0
  }

  deposit(amount) {
    this.balance += amount
    return `You have deposited £${amount}`

  }
  withdraw(amount) {
    this.balance -= amount
    return `You have withdrawn £${amount}`
  }

}

module.exports.transactions = Transactions;
