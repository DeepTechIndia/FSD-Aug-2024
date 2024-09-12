// unary operator
// prefix and postfix

// postfix

let x = 5;
let y = x++;

console.log("The value of X", x); //6
console.log("The value of Y", y); //5

let i = 5;
let result = i++ + 2;

// i + 2 => 7

console.log(result); //7
console.log(i); //6

// prefix increment

let a = 5;
let b = ++a;

console.log(a); //6
console.log(b); //6

let j = 5;
let ans = ++j + 2;

console.log("j", j); //6
console.log("ans", ans); //8

// postfix decrement

let c = 4;
let d = c--;

console.log(c); //3
console.log(d); //4

// prefix decrement

let m = 9;
let n = --m;

console.log(m); //8
console.log(n); //8

let s = 1; //2
let r = 2; //3
let sum = s++ + ++r;

console.log(sum, s, r); //4,2,3
