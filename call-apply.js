const kibria = {
    id: 101,
    balance: 5000,
    name: 'RJ kibria',
    treadDay: function (expense,boksis, tax) { 
        this.balance = this.balance - expense - boksis - tax;
        console.log(this);
        return this.balance;
    }
}
const heroBalam = {
    id: 102,
    balance: 6000,
    name: 'Hero Balam'
}
const normalGolam = {
    id: 102,
    balance: 8000,

}
// kibria.treadDay.call(heroBalam, 100, 100, 20);
// kibria.treadDay.call(heroBalam, 300, 50, 30);
// const heroTreatDay = kibria.treadDay.bind(heroBalam);
// heroTreatDay(500);

kibria.treadDay.apply(heroBalam, [500, 100, 50]);
kibria.treadDay.apply(heroBalam, [1000, 100, 50]);

kibria.treadDay.apply(normalGolam, [700, 100, 50]);