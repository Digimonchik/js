
// console.log("+17:", +17);
// console.log("+'77':", +'77');
// console.log("10 + '5':", 10 + '5');
// console.log("'some' + 'text':", 'some' + 'text');
// console.log('undefined + 1:', undefined + 1);
// console.log('null + 8:', null + 8);
// console.log("undefined + '5':", undefined + '5');
// console.log('7 - null:', 7 - null);
// console.log('5 - undefined:', 5 - undefined);
// console.log("'text' + null:", 'text' + null);
// let num = 17;
// console.log('++num:', ++num);
// console.log('num++:', num++);
// const a = 17;
// const b = -a;
// console.log("'24' / 4:",'24' / 4);
// console.log("18 * '3':", 18 * '3');
// console.log("'9' - '3':", '9' - '3');
// console.log("'seventeen' / 3:",'seventeen' / 3);
// console.log("4 * 'four':", 4 * 'four');
// console.log('17 / 0:',17 / 0);
// console.log("10 + 'seven':", 10 + 'seven');
// console.log('undefined + 1:', undefined + 1);
// console.log('null + 8:',null + 8);
// console.log("undefined + '5':", undefined + '5');
// console.log("'text' + null:", 'text' + null);

// const { start } = require("repl");

// console.log('17 to string is ' + String(17));
// console.log('-17.17 to string is ' + String(-17.17));
// console.log('false to string is ' + String(false));
// console.log('null to string is ' + String(null));
// console.log('undefined to string is ' + String(undefined));
// console.log('0 to string is ' + String(0));
// console.log("'17' to number is " + Number(17));
// console.log('true to number is ' + Number(true));
// console.log('false to number is ' + Number(false));
// console.log('null to number is ' + Number(null));
// console.log('undefined to number is ' + Number(undefined));
// console.log("'   20   ' to number is " + Number('   20   '));
// console.log("'      ' to number is " + Number('      '));
// console.log("'   30d   ' to number is " + Number('   30d   '));
// console.log('null to boolean is ' + Boolean(null));
// console.log('undefined to boolean is ' +  Boolean(undefined));
// console.log('0 to boolean is ' + Boolean(0));
// console.log('-0 to boolean is ' + Boolean(-0));
// console.log('NaN to boolean is ' + Boolean(NaN));
// console.log("'' to boolean is " + Boolean(''));
// console.log("' ' to boolean is " + Boolean(' '));
// console.log('17 to boolean is ' + Boolean(17));
// console.log("'Hello' to boolean is " + Boolean('Hello'));

// const a = 17;
// const b = 5;
// console.log('a > b:', a > b);
// console.log('a <= b:', a < b);
// console.log('a == b:', a == b);
// console.log('a != b:', a != b);
// console.log("'a' < 'b':",'a' < 'b') ;
// console.log("'ab' > 'a':", 'ab' > 'a');
// console.log("'17' > 1:",'17' > 1);
// console.log("17 === 1:", 17 === 1);
// console.log("17 === 17:", 17 === 17);
// console.log("17 === '17':", 17 === '17');
// console.log("17 === true:", 7 === true);
// console.log("'0' === '':", '0' === '');
// console.log("true === false:", true === false);
// console.log("true === true:", true === true);
// console.log("null === undefined:", null === undefined);
// console.log("false === 0:", false === 0);
// console.log("17 == '17':",17 == '17');
// console.log("'0' == '':",'0' == '');
// console.log("0 == '':",0 == '');
// console.log("null == undefined:", null == undefined);
// console.log("false == 0:", false == 0);
// console.log("undefined == null:", undefined == null);
// console.log("undefined == 0:", undefined == 0);
// console.log("null == 0:", null == 0);
// console.log("undefined < 0:", undefined < 0);
// console.log("undefined > 0:", undefined > 0);

// console.log("false || true:", false || true);
// console.log("false || true || false:", false || true || false);
// console.log("false || false || false:", false || false || false);
// console.log("false && true:", false && true);
// console.log("false && true && false:", false && true && false);
// console.log("true && true && true:",true && true && true);
// console.log("'text' || false:", 'text' || false);
// console.log("true || 'text':", true || 'text');
// console.log("undefined || null || 0 || '' || null:",undefined || null || 0 || '' || null);
// const customAmount = null; // не выводим
// const defaultAmount = 17; // не выводим
// const amount = customAmount || defaultAmount; 
// console.log('amount:', amount);
// console.log("'text' && false:", 'text' && false);
// console.log("true && 'text':",true && 'text');
// console.log("undefined && null && 0 && '' && null:", undefined && null && 0 && '' && null);
// console.log("!true:", !true);
// console.log("!false:", !false);
// console.log("!'text':", !'text');
// console.log("!!'text':", !!'text');

// let sum = '';
// const n = 5;
// for (let i = 1; i <= n; i++)
//     {
//     result += i;
//     console.log(result) 
//     }

// const start = 0;
// const end = 10;
// let result = 1;
// for (let i = start; i <= end; i++) {
//     if (i % 5 == 0) {
//         console.log(i)
//     }
//     else if (i % 2 == 0 & i % 4 > 0) {
//         result += i;
//     }
//     else if (i % 3 == 0) {
//             result -= i; 
//     }
//     else if (i % 4 == 0) {
//         result *= i;
//     }
// }

// let result = 0;
// for (let i = 0; i <= 1000; i++) {
//     if (i % 2 > 0) {
//         console.log('Found');
//         result += i;
//     }
// }
// if (result * 5 > 5000) {
//     console.log('Bigger')
// }
// else if (result * 5 == 5000) {
//     console.log('equal')
// }
// else if (result * 5 < 5000) {
//     console.log('Smaller')
// }

// let result = 0;
// for (let i = 0; i <= 10000000; i++) {
//     result += i;
// // }
// // console.log(result);

// let result = 0;
// for (let i = 0; i <= 1000; i++) {
//     result += i;
// }
// let div = Math.trunc(result / 1234);
// let mods = result % 1234;
// console.log (div > mods)


// function getPrimes(num) {
//     for (let i = 1; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//          else {return true}
//     }
// }
// function sum(from, to) {
//     let result = 0;
//     for (let i = from; i <= to; i++) {
//       result +=i;
//     }
//     return result;
//   }
// function compareSums (a, b, c, d) {
//   return sum(a,b) > sum(c,d)
// }
// function findDivCount(a, b, n) {
//   let result = 0;
//   for (let i=a; i <=b; i++) {
//     if ( i % n == 0) {
//         result += 1
//         console.log()
//     }
//     }
//     return result
// }

// function getArrayBounds(arr) {
//     if (Array.isArray(arr) == false) {
//         return null
//     }
//     else {
//         return [arr.length, arr[0], arr[arr.length - 1]]
//     }
// }   

// getArrayBounds([1, 10, 9, 11]); // ==> [4, 1, 11]
// getArrayBounds(10, 12, 14); // ==> null
// getArrayBounds([1]); // ==> [1, 1, 1]

// function getSum(arr) {
//     let result = 0;
//     if (Array.isArray(arr) == false) {
//         return null
//     }
//     else {
//         for (let i = 0; i < arr.length; i++) {
//             result += arr[i]
//         }
//         return result
//     }
// }

// function getSpecialNumbers(from, to) {
//   let arr = [];
//   for (let i = from; i <= to; i ++) {
//     if (i % 3 == 0) {
//       arr.push(i); 
//     }
//     }
//     return arr;
//   }

// function swap(arr) {
//     const [start, ...rest] = arr;
//     return [...rest, start]
// }
// function swapManual(arr) {
//     let newArr = []
//     for (let i = 1; i < arr.length; i++)
//     {
//         newArr.push(arr[i])
//     }
//     newArr.push(arr[0]);
//     return newArr;
// }

// function checkSum(arr) {
//   let sum = 0;
//   if (Array.isArray(arr) == false) {
//     return null
//   }
//   for (let i= 0; i< arr.length; i ++)
//     {sum += arr[i]}
//   if (sum > 100 ) {
//     return true
//   }
// else {return false}
// }

// function reverseArray(arr) {
//   let newArr = []
//   if (Array.isArray(arr) == false) {
//     return null
//   }
//   else {
//       for (let i = 0; i < arr.length; i++) {
//           console.log(arr[i]);
//       newArr.unshift(arr[i])
//     }
//   }
//   return newArr
// }


// function checker(arr) {
//   let max= 0;
//   let min= 0;
//   if (Array.isArray(arr) == false) {
//     return null
//   }
//   else {
//     max = Math.max(...arr);
//     min = Math.min(...arr);
//     if (max + min > 1000) {
//       return true;
//       }
//       else {return false}
//     }
//   }

// function sortAsc(array) {
//     let newArray = [];
//     if (Array.isArray(array) == false) {
//         return null
//     }
//     else 
//         newArray = array.sort((a, b) => a - b)
//   return newArray
// }
// function sortDesc(array) {
//     let myArray = [];
//     let reverseArray = [];
//     if (Array.isArray(array) == false) {
//         return null
//     }
//     else 
//         myArray = array.sort((a, b) => a - b)
//         for (let i = 0; i < myArray.length; i++) {
//             reverseArray.unshift(myArray[i]);
//         }
//         return reverseArray
// }
// function withdraw(clients, balances, client, amount) {
//     if (balances[clients.indexOf(client)] < amount) {
//         return -1
//     }

//     balances[clients.indexOf(client)] = balances[clients.indexOf(client)] - amount;
//     return balances[clients.indexOf(client)]
// }

// function includes(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//            return true
//       }
//   }
//   return false
// };

// function uniqueCount(array) {
//     let newArr = [];
//     if (Array.isArray(array) == false) {
//         return null;
//     }
//     for (let i=0; i< array.length; i++) {
//         if (includes(newArr, array[i]) == false) {
//             newArr.push(array[i])
//         }
//     }
//     return newArr.length
//     }


// const gestSpecialNumbers = array => {
//     let newArray = [];
//     array.forEach(num => {
//         if (num % 3 === 0) {
//             newArray.push(num)
//         };
//     })
//     return newArray
// }

// const sortDesc = array => {
//     let result =[]
//     result = array.sort((a, b) => a < b ? 1 : -1 )
//     return result;
//     }

// const flatArray = array => [...array].flat().sort((a,b) => a > b ? 1 : -1 );
// const allStud = ['a', 'b', 'c', 'd'];
// const retakeStud = ['b', 'd'];
// const getMessegesForBestStudents = (allStud, retakeStud) => {
//     const passed = allStud.filter(name => retakeStud.indexOf(name) === -1);
//     const messages = passed.map(name => 'Good job ' + name);
//     return messages;
// }
// const squareArray = array => {
//     if (Array.isArray(array) === false) { return null };
//     return array.map(elem => elem * elem);
// }

// const reverseArray = array => {
//     if (Array.isArray(array) === false) {
//         return null;
//     }
//     let result = [];
//     result = array.slice().reverse()
//     return result;
// }

// const increaseEvenEl= (arr, delta) => {
//     if(Array.isArray(arr) === false) {
//         return null
//     }
//     let result = [];
//     result = arr.map(elem => {
//         if (elem % 2 == 0) return elem * delta;
//         return elem;
//     }
//     )
//     return result
// }

// const cloneArr = arr => { 
//     if (Array.isArray(arr) == false)
//     {return null}
//     return [...arr]
// }

//  function withdraw(clients, balances, client, amount) {
//     if (balances[clients.indexOf(client)] < amount) {
//         return -1
//     }

//     balances[clients.indexOf(client)] = balances[clients.indexOf(client)] - amount;
//     return balances[clients.indexOf(client)]
// }

// 

// const filterNames = (arr, text) => {
//     let result = [];
//     result = arr.filter((name) => {
//         if (name.includes(text) && name.length > 5) {
//             return name
//         }
//     })
//     return result
//     }

// const getAvarage = arr => {
//     let sum = 0;
//     sum = arr.reduce((firstItem, nextItem) => 
//         firstItem + nextItem)
//         return sum/arr.length
// }

// const transformToObject = arr => {
//   let obj = {};
//   arr.forEach(el => {
//     obj[el] = el;
//   })
//   return obj
// };


// const concatProps = obj => {
//     let arr = [];
//   for (let key in obj) {
//     arr.push(obj[key])
//     }
//     return arr
// };

// const transaction = {
//   currency: 'USD',
//   value: 170,
//   operation: 'sale',
//   agent: {
//     country: 'Ukraine',
//     company: 'NYSE',
//   },
//   'operation time': 1584029990001,
// };
// console.log(transaction.currency);
// /* выведи в консоль значение свойства 'currency' с помощью точки */
// console.log(transaction.value);
// /* выведи в консоль значение свойства 'value' с помощью квадратных скобок */

// const key = 'operation';
// /* выведи в консоль значение свойства, название которого находится в переменной key - используйте квадратные скобки */
// console.log(transaction[key]);  
// /* выведи в консоль значение свойства 'company' используя квадратные скобки */
// console.log(transaction.agent.company);
// /* выведи в консоль значение свойства 'country' используя точку */
//  console.log(transaction.agent.country)
// /* выведи в консоль значение свойства 'operation time' используя квадратные скобки */
// console.log(transaction['operation time'])

// const pickProps = (obj, props) => {
//     let result = {};
//     for (let key in obj) {
//         if (props.includes(key)) {
//             result[key] = obj[key];
//         }
//     }
//     return result;
// }

// const getAdults = obj => {
//   result = {};
//   for (let key in obj) {
//     if (obj[key] >= 18)
//     result[key] = obj[key]
//   }
//   return result
// };



// function getKeys(obj) {
//   const keys  = Object.keys(obj);
//   return keys;
// }

// const compareObj = (obj1, obj2) => {
//   const objvalues1 = Object.values(obj1);
//   const objvalues2 = Object.values(obj2);
//   for (let i = 0; i < objvalues1.length; i++) {
//     if (objvalues1[i] != objvalues2[i]) return false;
//   }
//   return true;
// }
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   age: 17,
// };

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17,
// };


// function mergeObjectsV1(obj1, obj2) {
//   return Object.assign(obj1, obj2)
// }

// function mergeObjectsV2(obj1, obj2) {
//   return Object.assign(obj2, obj1)
// }

// function mergeObjectsV3(obj1, obj2) {
//   let newObj = {};
//   newObj = { ...obj1, ...obj2 };
//   return newObj;
// }

// function mergeObjectsV4(obj1, obj2) {
//     let newObj = {};
//   newObj = { ...obj2, ...obj1 };
//   return newObj;
// }

// // examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   student: false,
// };

// const getPeople = object => {
// if (Object.keys(object).length == 0) {
//     return [];
// }
//   let sortedObject = Object.values(object);
//   sortedArray = [];
//   result1 = [];
//   result2 = [];
//   sortedObject.map(key => {
//     key.forEach(i => { sortedArray.push(i) })
//   })
//   sortedArray.map(key => {
//     result1.push(Object.values(key))
//   })
//   result1.map(key => {
//     key.forEach(i => { result2.push(key[0])})
//   })
//   return result2
// }

// const rooms = {
//   room1: [
//     { name: 'jack' },
//     { name: 'Andrey'}
//   ],
//   room2: [
//     {name: 'Dan'}
//   ],
//   room3: [
//     {name: 'Denis'},
//     {name: 'Max'},
//     {name: 'Alex'},
//   ]
// }

// const getTotalRevenue = transactions => {
//   let result = 0;
//   transactions.forEach(key => {
//     result += key.amount
//   })
//   return result
// }

// const getAdults = obj => {
//   const filteredArray = Object.entries(obj);
//   console.log(filteredArray);
//   const filteredUsers = filteredArray.filter(name => {
//     name[] >= 18
//   console.log(name[1])});
// return filteredUsers
// }

// const getAdults = obj => {
//   let arr = [];
//   if (Object.keys(obj).length == 0) {
//     return arr
//   };
//   const usersArray = Object.entries(obj);
//   const filteredArray = usersArray.filter(user => user[1] >= 18);
//   const userNames = filteredArray.map(user => user[0]);
//   return userNames
// }

// const getFinitNumbers = arr => arr.filter(num => Number.isFinite(num) == true);
// const getFinitNumbers2 = arr => arr.filter(num => isFinite(num));
// const getNaN = arr => arr.map(num => Number.isNaN(num))

// const getParsedIntegers = arr => arr.map(num => Number.parseInt(num));
// const getParsedIntegersV2 = arr => arr.map(num => parseInt(num));
// const getParsedFloats = arr => arr.map(num => Number.parseFloat(num));
// const getParsedFloatsV2 = arr => arr.map(num => Number.parFloat(num));

// const multiRound = num => [Math.floor(num*100)/100, Math.trunc(num*100)/100, Math.ceil(num*100)/100, Math.round(num*100)/100, parseFloat(num.toFixed(2))]
// ;

// const getMaxAbsoluteNumber = arr => {
//     if (Array.isArray(arr) == false || arr.length == 0)
//     return null;
//     const newArr = arr.map(num => Math.abs(num))
//     console.log(newArr)
//     return Math.max(...newArr)
// }

// const getTotalPrice = arr => {
//     let result = 0;
//     arr.forEach(num => result += num);
    
//     result = Math.floor(result*100)/100
//     return '$'+result
// }

// function getRandomInt(length, from, to) {
//     let result = [],
//         min = Math.ceil(from),
//         max = Math.floor(to);
//     if (max - min < 0 && max != min) {
//         return null
//     }
//     for (let i = 1; i <= length; i++) {
//         console.log(min, max)
//        result.push(Math.floor(Math.random() * (max - min + 1) + min)
//         )
//     };
//     return result

// }

// const multiRound = (num,prec) => [Math.floor(num*parseInt('1'+prec*'0')/100, Math.trunc(num*100)/100, Math.ceil(num*100)/100, Math.round(num*100)/100, parseFloat(num.toFixed(2))]

const multiRound = (num, prec) => {
    let str = '1';
    for (let i = 1; i <= prec; i++) {
        str = str + '0'
    }
    return [Math.floor(num * parseInt(str)) / parseInt(str), Math.trunc(num * parseInt(str)) / parseInt(str), Math.ceil(num * parseInt(str)) / parseInt(str), Math.round(num * parseInt(str)) / parseInt(str), parseFloat(num.toFixed(prec))]
}

// const splitText = (str, length) => {
//     const resultArr = [];
//     let startingPoint = 0;
//     while (true) {
//         const chunk = str.substr(startingPoint, length)
//         if (chunk.length == 0) {
//             break
//         }
//         resultArr.push(chunk)
//     }
//     return resultArr
// }