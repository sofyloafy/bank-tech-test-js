var statement = require('../src/statement.js')
let statements = new statement.statement

describe('#Statement', () =>{
  test('Should return header', () => {
    expect(statements.header()).toBe(" Date      || Credit || Debit || Balance \n")
  })

  test('Should return formatted statement', () => {
    var n = new Date().toDateString()
    // console.log(statements.format({"date": n, "credit": "£5", "debit": "------", "balance": "£5"}))
    expect(statements.format([{"date": n, "credit": "£5", "debit": "------", "balance": "£5"}])).toMatch(`${n}  || £5  || ------  || £5`)
  })
})
