var bankAccount = require('../src/bankAccount.js').BankAccount
let bankAccounts = new bankAccount
var n = new Date().toDateString()


describe('#BankAccount', () =>{
  test('Should deposit', () => {
    expect(bankAccounts.deposit(1000)).toMatch("You have deposited £1000")
  })

  test('Should deposit', () => {
    expect(bankAccounts.withdraw(200)).toMatch("You have withdrawn £200")
  })

  test('Should return balance', () => {
    expect(bankAccounts.balance()).toBe(800)
  })

  // test('Should return statement', () => {
  //   expect(bankAccounts.printStatement()).toMatch(` Date      || Credit || Debit || Balance \n${n}  || £5  || ------  || £5`)
  // })

  test('Should return statement', () => {
    expect(bankAccounts.printStatement()).toEqual(` Date      || Credit || Debit || Balance \n${n}  || ------  || £200  || £800\n${n}  || £1000  || ------  || £1000`)
  })
})
