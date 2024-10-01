// while , for loop, do while

/* do{
   //code  
} while(condition) */

/* let count = 6;

do {
  console.log(count);
  count++;
} while (count <= 5);

 */

/* let n = 5;
let sum = 0;
let count = 1;

do {
  sum += count;
  count++;
} while (count <= n);

console.log(`The sum of numbers from 1 to  ${n}  is  ${sum} `); */

//factorial
/* 
let n = 5;

let factorial = 1;
let count = 1;

do {
  factorial *= count;
  count++;
} while (count <= n);

console.log(`the factorial of ${n} is ${factorial}`);
 */
/* 
let sum = 0;
let number;

do {
  number = +prompt("Enter the number (0 to stop): ", 10);
  sum += number;
} while (number !== 0);

console.log("total sum is :" + sum);
 */

let confirmAction;

do {
  confirmAction = prompt("Do you want to proceed? (yes/no):").toLowerCase();
} while (confirmAction !== "yes" && confirmAction !== "no");

if (confirmAction === "yes") {
  console.log("Action will proceed");
} else {
  console.log("Action Cancelled");
}
