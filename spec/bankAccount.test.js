var bankAccount = require('../src/bankAccount.js').BankAccount
let bankAccounts = new bankAccount

describe('#BankAccount', () =>{
  test('Should deposit', () => {
    expect(bankAccounts.deposit(5)).toMatch("You have deposited £5")
  })

  test('Should return balance', () => {
    expect(bankAccounts.balance()).toBe(10)
  })
})
