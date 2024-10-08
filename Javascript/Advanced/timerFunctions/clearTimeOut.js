//clearTimeOut

// clearTimeout(timeoutId)

/* function greet() {
  console.log("Hello World!");
}

const timeOutId = setTimeout(greet, 5000);

clearTimeout(timeOutId);
console.log("TimeOut Cancelled");
 */
/* 
function greet() {
  console.log("Hello World!");
}
const timeOutId = setTimeout(greet, 3000);

const shouldCancel = false;

if (shouldCancel) {
  clearTimeout(timeOutId);
  console.log("TimeOut Cancelled");
} else {
  console.log("TimeOut Not Cancelled");
}
 */

function showMessage() {
  console.log("This message is shown after the delay");
}

const timeOutId = setTimeout(showMessage, 1000);

setTimeout(() => {
  clearTimeout(timeOutId);
}, 2000);
