// let user = {
//     firstName: 'John',
//     lastName: "Doe"
// }

// const { transformAsync } = require("@babel/core");

// const { thisExpression } = require("@babel/types")

// user.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
// }

// let callbackPrompt = {
//     message: 'put your message here',
//     showPromt() {
//         console.log(prompt(this.message))
//     },
//     showDefferedPrompt(ms) {
//         setTimeout(this.showPromt.bind(this), ms)
//     }

// function defer(func, ms) {
//     return function () {
//         setTimeout(() => func.apply(this, arguments),ms)
//     }
// }
// const user = {
//     name: 'Tom',
//     sayHi() {
//         console.log(`Hi, i'am ${this.name}`)
//     }
// }
//  const deferredHi = defer(user.sayHi, 1000)


// let timer = {
//     secondsPassed: 0,
//     minsPassed: 0,
//     startTimer() {
//         this.intervalID = setInterval(() => { 
//                 this.secondsPassed += 01;
//                 if (this.secondsPassed == 60) {
//                     this.secondsPassed = 0;
//                     this.minsPassed += 1;
//                 }
//             }
//                 , 1000);
//     },
//     getTime() {
//         if (this.secondsPassed < 10) { return `${this.minsPassed}:0${this.secondsPassed.toFixed()}`}
//     return `${this.minsPassed}:${this.secondsPassed.toFixed()}`
//     },
//     stopTimer() {
//         clearInterval(this.intervalID)
//     },
//     resetTimer() {
//         this.secondsPassed = 0;
//         this.minsPassed = 0;
//     }
// }
/* ===> 1 <=== */

// const student = {
//     name: 'Tom',
// };
// const otherStudent = {
//     name: 'Bruse'
// }

// function sayName() {
//     console.log(this.name);
// }

// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента 
// sayName.call(student)


// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
// sayName.call(otherStudent)




// /* ===> 2 <=== */
// const company = {
//     companyName: 'Microsoft'
// };

// function greeting(firstName, lastName) {
//     console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
// }

// // вызовите ф-цию greeting так, чтобы в консоль вывелось 
// // 'Hello, Bob Marley. Welcome to the Microsoft'
// // используйте объект company
// greeting.call(company,'Bob','Marley')


// /* ===> 3 <=== */
// const country = {
//     countryName: 'Ukraine',
//     capital: 'Kyiv'
// };

// function getPopulation(population) {
//     return `Population in ${this.countryName} is ${population}`;
// }

// // вызовите ф-цию getPopulation так, чтобы она вернула 
// // 'Population in Ukraine is 43000'
// // 43000 передавайте в виде числа
// // используйте объект country
// // результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
// const population  = getPopulation.call(country, 43000)
// console.log(population)

// /* ===> 4 <=== */
// const transaction = {
//     amount: 1200,
//     operation: 'sell',
//     currency: 'USD',
//     exchange: 'NYSE',
//     printTransaction() {
//         console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//     }
// }

// const anotherTransaction = {
//     amount: 400,
//     operation: 'buy',
//     currency: 'USD',
//     exchange: 'NASDAQ',
// };

// // вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
// // '400 USD - buy on NASDAQ'
// // используйте объект anotherTransaction как контекст
// // transaction.printTransaction.call(anotherTransaction)

// const student = {
//     name: 'Tom',
// };
// const anotherStudent = {
//     name: 'Bruce'
// }

// function sayName() {
//     console.log(this.name);
// }


// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента 
// sayName.apply(student)


// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
// sayName.apply(anotherStudent)



// /* ===> 2 <=== */
// const company = {
//     companyName: 'Microsoft'
// };

// function greeting(firstName, lastName) {
//     console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
// }

// // вызовите ф-цию greeting так, чтобы в консоль вывелось 
// // 'Hello, Bob Marley. Welcome to the Microsoft'
// // используйте объект company
// greeting.apply(company, ['Bob',['Marley']])


// /* ===> 3 <=== */
// const country = {
//     countryName: 'Ukraine',
//     capital: 'Kyiv'
// };

// function getPopulation(population) {
//     return `Population in ${this.countryName} is ${population}`;
// }

// // вызовите ф-цию getPopulation так, чтобы она вернула 
// // 'Population in Ukraine is 43000'
// // 43000 передавайте в виде числа
// // используйте объект country
// // результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
// let population = getPopulation.apply(country, [43000])
// console.log(population)



// /* ===> 4 <=== */
// const transaction = {
//     amount: 1200,
//     operation: 'sell',
//     currency: 'USD',
//     exchange: 'NYSE',
//     printTransaction() {
//         console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//     }
// }

// const anotherTransaction = {
//     amount: 400,
//     operation: 'buy',
//     currency: 'USD',
//     exchange: 'NASDAQ',
// };

// // вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
// // '400 USD - buy on NASDAQ'
// // используйте объект anotherTransaction как контекст
// transaction.printTransaction.apply(anotherTransaction)

/* ===> 1 <=== */
// const student = {
//   name: 'Tom',
// };
// const anotherStudent = {
//     name: 'Bruce'
// }

// function sayName() {
//   console.log(this.name);
// }

// const sayStudentsName = sayName.bind(student);
// const sayBruceName = sayName.bind(anotherStudent)

// sayStudentsName()
// sayBruceName()


// /* ===> 2 <=== */
// const company = {
//   companyName: 'Microsoft',
// };

// function greeting(firstName, lastName) {
//   console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
// }
// const specialGreeting = greeting.bind(company, 'Bob','Marley')
// specialGreeting()

// /* ===> 3 <=== */
// const country = {
//   countryName: 'Ukraine',
//   capital: 'Kyiv',
// };

// function getPopulation(population) {
//   return `Population in ${this.countryName} is ${population}`;
// }

// const getUkrainianPopulation = getPopulation.bind(country, 43000);

// getUkrainianPopulation()

// /* ===> 4 <=== */
// const transaction = {
//   amount: 1200,
//   operation: 'sell',
//   currency: 'USD',
//   exchange: 'NYSE',
//   printTransaction() {
//     console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//   },
// };

// const anotherTransaction = {
//   amount: 400,
//   operation: 'buy',
//   currency: 'USD',
//   exchange: 'NASDAQ',
// };

// /*
//  * создайте ф-цию printSpecialTransaction которая будет выводить в консоль
//  * '400 USD - buy on NASDAQ`
//  * используйте метод transaction.printTransaction и .bind с нужным объектом
//  * printSpecialTransaction не должна принимать ни одного аргумента
//  */
// let printTransaction = transaction.printTransaction.bind(anotherTransaction)

// printTransaction()

const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    setFullName(string) {
        this.firstName = string.split(' ')[0];
        console.log(string.split(' ')[0])
        this.firstName = string.split(' ')[1]
    }
}