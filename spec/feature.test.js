var bankAccount = require('../src/bankAccount.js').BankAccount
let bankAccounts = new bankAccount
var n = new Date().toDateString()

describe('#feature test', () =>{
  test('Should run a feature test', () => {
    bankAccounts.deposit(1000)
    bankAccounts.withdraw(200)
    expect(bankAccounts.balance()).toBe(800)
    expect(bankAccounts.printStatement()).toBe(` Date      || Credit || Debit || Balance \n${n}  || ------  || 200.00  || 800.00\n${n}  || 1000.00  || ------  || 1000.00`)
  })
})

