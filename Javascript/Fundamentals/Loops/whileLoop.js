// whileLoop

// syntax

// while(condition){
//     //code to execute

// }

/* let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
 */

/* const colors = ["red", "blue", "green", "yellow"];

let color = 0;

while (color < colors.length) {
  console.log(colors[color]);
  color++;
}
 */

/* let number = 7;

let num = 1;
while (num <= 10) {
  let result = number * num;
  console.log(`${number} x ${num} = ${result}`);
  num++;
}
 */

/* let correctPassword = "password";

let attempts = 3;

let userInput = prompt("Enter the password: ");
console.log(userInput);

while (userInput !== correctPassword && attempts > 0) {
  attempts--;

  if (attempts > 0) {
    userInput = prompt(`Incorrect password. ${attempts} left. enter again:`);
  }
}

if (userInput === correctPassword) {
  console.log("Access Granted");
} else {
  console.log("Access Denied. Too may incorrect attempts");
}
 */

// guessTheNumber

let secretNumber = Math.floor(Math.random() * 10) + 1;
console.log(secretNumber);

let guess;
let attempts = 3;

while (attempts > 0) {
  guess = +prompt(
    `Guess the secret Number (between 1 and 10). Attempts left :${attempts}`
  );

  if (guess === secretNumber) {
    console.log("congrats! you guessed teh secret number");
    break;
  } else {
    attempts--;
    if (attempts > 0) {
      console.log("Wrong Guess, Try again");
    }
  }
}

if (attempts === 0) {
  console.log(`Out of attempts. The secret number was ${secretNumber}`);
}
