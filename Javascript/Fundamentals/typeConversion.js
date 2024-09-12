// Type Conversion / tyep coercion
// automatically(implicit conversion) | manually (explicit conversion)

// implicit conversion

/* let x = 5;
let y = "5";
let result = x + y;
console.log(typeof result);

console.log("hello" + 5);

// multiplication
console.log(x * y); //25

console.log(x / y); //1

console.log(x % y); //0

let data = "hello" * 5;
console.log(data); //Nan

console.log("hello" - 5);
 */

// Explicit Conversion (Type Casting) functions

// Convert to String

/* let num = 123;
console.log(typeof num); //Number

let str = String(num);
console.log(typeof str);

let str2 = num.toString();
console.log(typeof str2);

*/

// Convert to number

/* let str = "123.234";
let num = Number(str); //123.234
console.log(num);
let num2 = parseInt(str);
console.log(num2);
console.log(typeof num2); //Number

let num3 = parseFloat(str);
console.log(num3);
console.log(typeof num3); //Number
 */

// Boolean
let str = "H";
let bool = Boolean(str); //true
console.log(bool);

let num = 0;
let bool2 = Boolean(num);
console.log(bool2);

// Boolean(num);

console.log(Boolean("")); //false
console.log(Boolean(" ")); //true

// 0 => false
// 1 => true
