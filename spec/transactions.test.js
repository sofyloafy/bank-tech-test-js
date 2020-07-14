const deposit = require('../src/transactions.js')

describe('#Transactions', () =>{
  test('Allows a deposit', () => {
    expect(typeof deposit(5)).toBe('number')
  })
})