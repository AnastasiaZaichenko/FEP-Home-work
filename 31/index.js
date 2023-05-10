// "use strict";
var user = {
  name: "John Smith",
  getName: function () {
    var self = this;
    console.log(this.name);
    console.log(self.name);
    (function () {
      console.log(this.name);
      console.log(self.name);
    })();
  },
};
user.getName();

// ??// "use strict";
// var userName = "Bill Anderson";
// function getUserName(myName = "USER_NAME") {
//   var userName = myName;
// }
// getUserName("John Smith");
// console.log(userName);
// // потому что функция не видит переменную?

// function Man(name) {
//   this.firstName = name;
// }

// var testMan = new Man("TestMan");
// console.log(testMan.firstName);

// Man("helloMan");
// console.log(window.firstName);

// "use strict";

// var person = {
//   name: "No name",
//   age: 0,
// };

// var baby = Object.create(person);

// console.log(baby.name);
// baby.name = "John";
// console.log(baby.name);

// console.log(baby.__proto__.age);

// let Man = function (userName = "", age = 0) {
//   this.name = userName;
//   this.age = age;
// };
// Man.prototype.getFullInfo = function () {
//   return "Name: " + this.name + "\nAge:" + this.age;
// };
// let bill = new Man("Bill", 17);
// let sam = new Man("Sam", 15);
// let other = new Man();
// console.log(other);
// console.log(other.__proto__.getFullInfo());

// // ??
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }
// потому что на помент вывода  консоля функция уже отработала

// Що буде виведено в консоль?
// fetch("http://some-real-url.io")
//   .then(function () {
//     setTimeout(function () {
//       console.log("x");
//     });
//   })
//   .then(function () {
//     console.log("y");
//   });
