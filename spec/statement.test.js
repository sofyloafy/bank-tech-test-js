var statement = require('../src/statement.js')
let statements = new statement.statement

describe('#Statement', () =>{
  test('Should return header', () => {
    expect(statements.header()).toBe(" Date      || Credit || Debit || Balance \n")
  })})
