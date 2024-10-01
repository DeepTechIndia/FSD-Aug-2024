//CallBack Functions => another function as a i/p or it may return a new function
/* 
exmple => cooking pizza, friend => pizza is ready, 
friend -=> calls back => stop the work your doing, and youll come back and eat pizza. */

/* function greet(name, CallBack) {
  console.log("Hello " + name);
  CallBack();
}

function sayGoodBye() {
  console.log("GoodBye!");
}

//
// console.log(sayGoodBye);
greet("Abc", sayGoodBye); */

/* function calculate(num1, num2, callback) {
  let result = num1 + num2;
  callback(result);
}

function displayResult(data) {
  console.log(`The result is: ${data}`);
}

calculate(1, 2, displayResult);

console.log(displayResult);
 */

/* function mathOperation(x, y, operation) {
  return operation(x, y);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

console.log(mathOperation(1, 2, add));
console.log(mathOperation(4, 2, subtract));
console.log(mathOperation(2, 2, multiplication));
 */

//transforming an array
/* 
function transformArray(arr, transform) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // let transformedValue = transform(arr[i]);
    result.push(transform(arr[i]));
  }
  return result;
}

function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

const numbers = [1, 2, 3, 4, 5]; //[2,4,6,8,10]

console.log(transformArray(numbers, double));
console.log(transformArray(numbers, square)); */

// filter an array
/* 
function filterArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// isEven(2) => true
function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filterArray(numbers, isEven));
console.log(filterArray(numbers, isOdd));
 */

//reduce an array
/* 
// initialValue = 0;
function reduceArray(arr, callback, initailaValue) {
  let accumulator = initailaValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }

  return accumulator;
}

// total =0;
function sum(total, num) {
  return total + num;
}

function product(total, num) {
  return total * num;
}

const numbers = [1, 2, 3, 4, 5];

// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   total += arr[i];
// }
console.log(reduceArray(numbers, sum, 0));
console.log(reduceArray(numbers, product, 1));
 */

//mapping an array

const words = ["hello", "world", "javascript"];

function mapArray(arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(callback(arr[i]));
  }

  return newArray;
}

function capitalize(str) {
  return str.toUpperCase();
}

console.log(mapArray(words, capitalize));
