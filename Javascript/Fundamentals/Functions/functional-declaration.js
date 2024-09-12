// Functions => reusable piece of code

// function functionName() {
//   // function Body
// }

// function sayHi() {
//   console.log("Hi");
// }

// sayHi();
// sayHi();
// sayHi();
// sayHi();
// sayHi();
// sayHi();
// sayHi();
// sayHi();
// sayHi();

// DRY => Do not repeat yolurself
/* 
let a = 1;
let b = 2;

let result = a + b;
console.log(result);

let c = 3;
let d = 4;
console.log(c + d); */

// function add(a, b) {
//   let result = a + b;
//   console.log(result);
// }

// let num1 = 1;
// let num2 = 2;

// add(num1, num2); //3
// add(4, 5); //9
// add(6, 7); //13

// add(1,2) a=1, b =- 2

// console.log(num1); //1
// console.log(num2); //2
/* 
function isEvenOdd(number) {
  //   let result = number % 2 === 0;
  //   console.log(result);

  //   if (number % 2 === 0) {
  //     console.log(`${number} is Even`);
  //   } else {
  //     console.log(`${number} is Odd`);
  //   }

  let result = number % 2 === 0 ? `${number} is Even` : `${number} is Odd`;
  console.log(result);
}

// isEven(4);
// isEven(5);

isEvenOdd(6);
isEvenOdd(5);


 */

// function findMax(a, b, c) {
//   if (a > b && a > c) {
//     console.log(`${a} is Greater`);
//   } else if (b > a && b > c) {
//     console.log(`${b} is Greater`);
//   } else {
//     console.log(`${c} is greater`);
//   }
// }

// findMax(5, 10, 3);
// findMax(15, 10, 30);

// Return=> stop the exection of a function => return a value

function add(a, b) {
  return a + b;
  console.log(3);
}
// console.log(add(1, 2)); //3

let result = add(2, 3); //5
console.log(result);

/* function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

let zero = checkNumber(0);
console.log(zero);

console.log(checkNumber(5));
 */

let day_1 = getDayOfWeek(1);
console.log(day_1);

function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";

    default:
      return "Invalid Day Number";
  }
}

// let day_1 = getDayOfWeek(1);
// console.log(day_1);

declaredFunction();

function declaredFunction() {
  console.log("I am a function Declaration");
}
