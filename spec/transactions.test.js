const deposit = require('../src/transactions.js')

describe('#Transactions', () =>{
  // test('Takes a number', () => {
  //   expect(typeof deposit(5)).toBe('number')
  // })

  test('Allows a deposit to be paid', () => {
    expect(deposit(5)).toBe('You have deposited £5')
  })

})