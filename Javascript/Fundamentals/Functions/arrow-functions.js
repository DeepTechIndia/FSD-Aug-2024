// arrow functions => consise way / functional expression / ES6
// shorter syntax

//syntax

// const functionName = () => {};

// const functionName = parameter => {};

// const add = (a, b) => a + b;

// function expression

// const greet = function (name) {
//   return `Hello, ${name}!`;
// };

// console.log(greet("abc"));

//
// const greeting = (name) => `Hello, ${name}!`;
// console.log(greeting("xyz"));

// const isEven = (num) => num % 2 === 0;
// console.log(isEven(30));

const catgorizeAge = (age) => {
  if (age < 13) {
    return "Child";
  } else if (age >= 13 && age < 20) {
    return "Teenager";
  } else if (age >= 20 && age < 65) {
    return "Adul;t";
  } else {
    return "Senior";
  }
};

console.log(catgorizeAge(10)); //'child'
