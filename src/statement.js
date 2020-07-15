const history = require('../src/transactionHistory.js')
var transactions = new history.history

class Statement {
  header(){
    return " Date      || Credit || Debit || Balance \n"
  }

  format(historytransaction){
      let valArr = historytransaction.map(o => Object.values(o));
      var final = valArr.join().replace(/,/g,"  || ");
      console.log(this.header())
      console.log(final)
      return final
    }
  };

module.exports.statement = Statement;