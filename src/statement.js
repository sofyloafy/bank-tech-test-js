const history = require('../src/transactionHistory.js')
var transactions = new history.history

class Statement {
  header(){
    return " Date      || Credit || Debit || Balance \n"
  }

  format(historytransaction){
    historytransaction.reverse()
    const output = []
    for (let index = 0; index < historytransaction.length; index++) {
      const subArray = historytransaction[index];
      let valArr = Object.values(subArray);
      const formattedLine = valArr.join().replace(/,/g,"  || ")
      output.push(formattedLine);
      var final = output.join('\n')
    }
      return final
    }
  };

module.exports.statement = Statement;