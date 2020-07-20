const history = require('../src/transactionHistory.js')
var transactions = new history.history
var n = new Date().toDateString()

describe('#depositTransaction', () =>{
  test('Formats a deposit transaction', () =>{
    transactions.depositTransaction(5, 5)
    expect(transactions.transactionHistory[0]).toStrictEqual({"balance": "5.00", "credit": "5.00", "date": n, "debit": "------"})
  })

  test('Formats a deposit transaction', () =>{
    transactions.depositTransaction(10, 10)
    expect(transactions.transactionHistory[1]).toStrictEqual({"balance": "10.00", "credit": "10.00", "date": n, "debit": "------"})
  })
})

describe('#depositTransaction', () =>{
  test('Formats a withdrawal transaction', () =>{
    transactions.withdrawTransaction(5, 0)
    expect(transactions.transactionHistory[2]).toStrictEqual({"balance": "0.00", "credit": "------", "date": n, "debit": "5.00"})
  })
})
