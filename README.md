# Bank Tech Test in JS



<i>Please find source spec [here](https://github.com/makersacademy/course/blob/master/individual_challenges/bank_tech_test.md)</i>

Jump to:
* [Specification](https://github.com/sofyloafy/bank-tech-test-js#specification)
* [Quick Start](https://github.com/sofyloafy/bank-tech-test-js#quick-start)
* [Testing](https://github.com/sofyloafy/bank-tech-test-js#testing)


### Challenge progress overview:
* User can create a new bank account
* User can deposit any sum
* User can withdraw any sum, funds-permitting
* User can view their statement in a user-friendly format
* The statement is reverse-ordered


## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Quick Start

1. Clone this repo
2. Bundle install
3. You can run the tests at any time:
```
npm test
```
4. Launch node
```
node
```
5. Once in the repl, type in:
```
var Account = require('./src/BankAccount')
```

```
myAccount = new Account.BankAccount
```
6. You can then withdraw, deposit, view your balance, and see your statement!
```
myAccount.deposit(100);
myAccount.withdraw(87);
myAccount.balance();
myAccount.printStatement();
```
## Testing
* I installed Jest to test the programme, which included the coverage flag to ensure coverage of all functionality and safeguard against spiking and unsustainable code..

## Approach
* I decided to split the responsibilities across 4 classes, which are Transaction, for handling transactions, TransactionHistory, to store the transactions, Statement, to format the user-friendly statement, and BankAccount, which converges the two.
* I wanted to ensure that SRP was maintained, and that responsibility was shared evenly among the classes.
* This repl programme was made with the assumption that the user cannot go over-drawn. If they attempt to withdraw more funds than they have, they will be notified of their insufficient funds.