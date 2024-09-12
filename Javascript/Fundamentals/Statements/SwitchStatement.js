// Switch Statement

/* syntax: switch (expression) {
  case value1:
    // code to execute
    break;

  case value2:
    // code to execute
    break;
  case value3:
    // code to execute
    break;
  case value4:
    // code to execute
    break;
  case value5:
    // code to execute
    break;
  default:
  // code
}
 */

// Grading System
/* let grade = "B";

let message;

switch (grade) {
  case "A":
    message = "Excellent";
    break;

  case "B":
    message = "Good";
    break;

  case "C":
    message = "Fair";
    break;

  case "D":
    message = "Poor";
    break;

  case "F":
    message = "Fail";
    break;

  default:
    message = "Invalid Grade";
}

console.log(message); */

// Calculator
/* 
let Operator = "*";
let a = 5;
let b = 3;
let result;

switch (Operator) {
  case "+":
    result = a + b;
    break;

  case "-":
    result = a - b;
    break;

  case "*":
    result = a * b;
    break;

  case "/":
    result = a / b;
    break;

  default:
    result = "Invalid oprator";
}

console.log(result);
 */

let role = "admin";
let permission;

switch (role) {
  case "admin":
    permission = "full access";
    break;

  case "editor":
    permission = "editing access";
    break;

  case "viewer":
    permission = "View access";
    break;

  default:
    permission = "Invalid Role / No Access";
}
console.log(permission);
