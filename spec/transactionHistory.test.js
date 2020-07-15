const history = require('../src/transactionHistory.js')
var transactions = new history.history
var n = new Date().toDateString()

describe('#depositTransaction', () =>{
  test('Formats a deposit transaction', () =>{
    transactions.depositTransaction(5)
    expect(transactions.transactionHistory[0]).toStrictEqual({"balance": "£5", "credit": "£5", "date": n, "debit": "------"})
  })

  test('Formats a deposit transaction', () =>{
    transactions.depositTransaction(10)
    console.log(transactions.transactionHistory)
    expect(transactions.transactionHistory[1]).toStrictEqual({"balance": "£10", "credit": "£10", "date": n, "debit": "------"})
  })
})

describe('#depositTransaction', () =>{
  test('Formats a withdrawal transaction', () =>{
    transactions.withdrawTransaction(5)
    console.log(transactions.transactionHistory[2])
    expect(transactions.transactionHistory[2]).toStrictEqual({"balance": "£5", "credit": "------", "date": n, "debit": "£5"})
  })
})
