// NUmber.isFinite()
/* 
console.log(Number.isFinite(10)); //true
console.log(Number.isFinite(-Infinity)); //false
console.log(Number.isFinite("10")); //false */

// Number.isInteger()

/* console.log(Number.isInteger(10)); //true
console.log(Number.isInteger(10.5)); //false
console.log(Number.isInteger("10")); //false */

//Number.isNaN()
/* 
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN(10)); //false
console.log(Number.isNaN("Hello")); //false
console.log(Number.isNaN(Number("Hello"))); //true

console.log(Number("Hello"));
 */

//Number.parseFloat

// let str = "10.234";

/* console.log(parseInt(str));
console.log(parseFloat("10.5")); //10.5
console.log(parseFloat("10.5abc")); //10.5
console.log(parseFloat("abc10.5")); //NaN
 */

// Number.parseInt()
/* 
console.log(Number.parseInt(str)); //10

console.log(parseInt("10abc")); */

// toFixed
let num = 10.12;

/* console.log(num.toFixed(2)); //10.12
console.log(num.toFixed(0)); //10
console.log(num.toFixed(5)); //10.12000
 */

console.log(typeof num.toString()); //"10.12"
