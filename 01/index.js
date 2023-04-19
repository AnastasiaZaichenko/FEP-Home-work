// const name = prompt('What is your name?');
// alert(`Hello, ${name}! How are you?`);

// if (1 === '1') {
//     console.log('istina')
// } else {
//     console.log('no')
// }

// if (5 == '5') {
//     console.log('istina')
// } else {
//     console.log('no')
// }

// let message = (92 > '11' && 20 < 100) ? 'istina' : 'no'
// console.log(message)

//  if (0) {
//     console.log('no')
//  } else if (' ') {
//     console.log('istin')
//  }

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete"; // (*)

// function sum(a) {
//   return function (b) {
//     a + b;
//   };
// }

// alert(sum(1)(2)); // 3
// alert(sum(5)(-1));

// /* .. ваш код для inBetween и inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }
// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

// function inArray(arr) {
//   return function (x) {
//     return arr.includes(x);
//   };
// }

// alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// function byField(fieldName) {
//   return (a, b) => (a[field] > b[field] ? 1 : -1);
// }

// let user = {
//   name: john,
// };

// user.surname = "smith";
// user.name = "Pete";
// delete user.name;
// let schedule = {};

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule));

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// }
// multiplyNumeric(menu);

// console.log(menu);

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   };

//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// function defaultFunc() {
//   console.log(this.name);
// }
// const obj1 = {
//   name: "Bob",
//   foo1: defaultFunc,
// };

// const obj2 = {
//   name: "Bob2",
// };

// const test = obj1.foo1.bind(obj2);
// test();

// оставить только четные числа из массива
// var arr = [12, 42, 63, 56, 122, 17, 117, 25, 645, 722, 964];

// for (var i = 0; i < arr.length; i++)
// {
//   if ((arr[i] % 2) === 0)
//   {
//   	console.log(arr[i]);
//   }
// }
