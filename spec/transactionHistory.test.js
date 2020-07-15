const history = require('../src/transactionHistory.js')
var transactions = new history.history


describe('#TransactionsHistory', () =>{
  test('Stores a transaction', () => {
    expect(transactions.store()).toBe('hello')
  })

  test('Formats a deposit transaction', () =>{
    var n = new Date().toDateString()
    transactions.depositTransaction(5)
    expect(transactions.transactionHistory[0]).toStrictEqual({"balance": "£5", "credit": "£5", "date": n, "debit": "------"})

  })
})