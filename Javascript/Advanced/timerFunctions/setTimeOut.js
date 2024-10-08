//setTimeOut => specific time or after a dfelay

// setTimeout(function, delay, ...agrs)
/* 
function greet() {
  console.log("Hello World!");
}

console.log("Log");
setTimeout(greet, 5000);
 */

/* setTimeout(function () {
  console.log("This message is delayed by 3 seconds");
}, 3000);
 */

/* function greet(name) {
  console.log("Hello " + name + "!");
}

setTimeout(greet, 2000, "abc"); */

function showNotification(message) {
  console.log("Notification: " + message);
}

function delayedFunction(message, delay) {
  setTimeout(showNotification, delay, message);
}

delayedFunction("You have a new message!", 4000);
