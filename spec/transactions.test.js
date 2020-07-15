const deposit = require('../src/transactions.js')
var transactions = new deposit.deposit

describe('#Transactions', () =>{
  // test('Takes a number', () => {
  //   expect(typeof deposit(5)).toBe('number')
  // })

  test('Allows a deposit to be paid', () => {
    expect(transactions.deposit(5)).toBe('You have deposited £5')
  })

  test('Allows a deposit to be paid', () => {
    expect(transactions.deposit(10)).toBe('You have deposited £10')
  })

  test('Allows a withdrawal to be made', () => {
    expect(transactions.withdraw(10)).toBe('You have withdrawn £10')
  })
})