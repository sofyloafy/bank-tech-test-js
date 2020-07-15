var transactions = require('../src/transactions.js')
var transaction = new transactions.transactions()

describe('#Transactions', () =>{
  test('Starts with a balance of 0', () => {
    console.log(transaction)
    expect(transaction.balance).toEqual(0)
  })

  test('Allows a deposit to be paid', () => {
    expect(transaction.deposit(5)).toBe('You have deposited £5')
  })

  test('Allows a deposit to be paid', () => {
    expect(transaction.deposit(10)).toBe('You have deposited £10')
  })

  test('Allows a withdrawal to be made', () => {
    expect(transaction.withdraw(10)).toBe('You have withdrawn £10')
  })
})