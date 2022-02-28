const student = {
    id: 101,
    balance: 5000,
    name: 'RJ kibria',
    major: 'mathematics',
    isRich: false,
    Subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treadDay: function (expense, bokshis) { 
        this.balance = this.balance - expense - bokshis;
        return this.balance;
    }
}

student.takeExam();
const remaining1 = student.treadDay(900, 100);
const remaining2 = student.treadDay(500, 50);
console.log(remaining2);