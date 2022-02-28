// console.log(this);
const kibria = {
    id: 101,
    balance: 5000,
    name: 'RJ kibria',
    treadDay: function (expense) { 
        this.balance = this.balance - expense;
        console.log(this);
        return this.balance;
    }
}