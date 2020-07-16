var bankAccounts = require('../src/bankAccount.js')
var bankAccount = bankAccounts.bankAccount

describe('#BankAccount', () =>{
  test('Should return header', () => {
    expect(statements.header()).toBe(" Date      || Credit || Debit || Balance \n")
  })

  test('Should return formatted statement', () => {
    expect(statements.format([{"date": n, "credit": "£5", "debit": "------", "balance": "£5"}])).toMatch(`${n}  || £5  || ------  || £5`)
  })

  test('Should return formatted statement', () => {
    expect(statements.format([{"date": n, "credit": "------", "debit": "£5", "balance": "£5"},{"date": n, "credit": "£5", "debit": "------", "balance": "£5"}])).toMatch(`${n}  || £5  || ------  || £5\n${n}  || ------  || £5  || £5`)
  })
})
