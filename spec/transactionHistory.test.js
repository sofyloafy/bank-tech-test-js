const history = require('../src/transactionHistory.js')
var transactions = new history.history


describe('#TransactionsHistory', () =>{
  test('Stores a transaction', () => {
    var d = new Date().toTimeString()
    var n = new Date().toDateString()
    expect(transactions.store()).toBe('hello')
  })
})