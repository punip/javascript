// create an account class 
// every account object should have attributes name,type, balance
// on every account object,call following methods
// withdraw - return the updated balance
// deposit - return the updated balance
export default class Account {
    static minBalance = 1000;


    constructor(name,type,balance,) {
        //this -- current object
        this.name = name;
        this.type = type;
        this.balance = balance;
    }
    withdraw(amount) {
        if (this.balance - amount <Account.minBalance) {
            // thow an exception to ur caller
            // throwing an exception causes an early from the function
            throw new Error('cannot withdraw as balance going below 1000');
        }
        this.balance = this.balance - amount ;
        return this.balance;     
        }

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }
    }