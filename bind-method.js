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
const heroBalam = {
    id: 102,
    balance: 6000,
    name: 'Hero Balam'
}
// kibria.treadDay(100);
const heroTreatDay = kibria.treadDay.bind(heroBalam);
heroTreatDay(500);