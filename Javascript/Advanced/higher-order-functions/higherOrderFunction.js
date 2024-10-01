//higherOrderFunctions => take a function as an argument or it may return a new function

/* function greet(name) {
  return "Hello, " + name;
}

function processUserInput(callback) {
  const name = prompt("Please enter your name: ");
  alert(callback(name));
}

processUserInput(greet);
 */

//returning a function
/* 
function ten() {
  return 10;
} */

/* let a = [1, 2, 3];
let b = a;

let value = ten();
console.log(value); */
/* 
function createMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5));

const triple = createMultiplier(3);
console.log(triple(5));  */

/* function createGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}`;
  };
}

const greetHello = createGreeter("Hello");
console.log(greetHello("qwerty"));

const greetGoodBye = createGreeter("GoodBye");
console.log(greetGoodBye("qwerty"));
 */

function createValidator(minLength) {
  return function (input) {
    return input.length >= minLength
      ? "valid input"
      : `Input should be atleast ${minLength} characters long`;
  };
}

const usernameValidator = createValidator(6);
console.log(usernameValidator("abcd"));
console.log(usernameValidator("qwerty"));

const passwordValidator = createValidator(8);
console.log(passwordValidator("pass123"));
console.log(passwordValidator("pass12345"));
