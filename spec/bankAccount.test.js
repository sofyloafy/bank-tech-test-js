var bankAccount = require('../src/bankAccount.js').BankAccount
let bankAccounts = new bankAccount

describe('#BankAccount', () =>{
  test('Should exist', () => {
    expect(bankAccounts.deposit(5)).toMatch("You have deposited £5")
  })
})
