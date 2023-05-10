let regexp = /love/;
alert(regexp.test("I love JavaScript")); // true
alert(regexp.test("I JavaScript")); // false

let regexp2 = /ing$/;
alert(regexp2.test("Good morning")); // true
alert(regexp2.test("Good morning!")); // false
