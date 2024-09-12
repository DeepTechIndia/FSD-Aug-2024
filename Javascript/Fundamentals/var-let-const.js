// 3 ways to declare the variable

// var, let and const

// var => functional scope / global scope , re declare the variable, re initialize the variable
// scope =>

// var x = 10;

// var x = 20;

// x = 30;

// console.log(x);

// {
//   var y = 10;
// }

// y = 20;
// console.log(y);

// Let => block scope, reintilize the value, cant redeclarable

let a = 1;
// let a = 2;
a = 5;

console.log(a);

{
  let b = 10;
}

// console.log(b);

// const => block scope => redeclare also reintialize the value

const firstName = "Hello";

// const firstName = "World"
firstName = "qwert";
console.log(firstName);
