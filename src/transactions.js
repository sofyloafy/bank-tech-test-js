class Transactions {

  deposit(amount) {
    return `You have deposited £${amount}`

  }
  withdraw(amount) {
    return `You have withdrawn £${amount}`
  }


}

module.exports.deposit = Transactions;
