//setInterval => repeatedly execute the function

// setInterval(function, delay, ...args)
/* 
function greet() {
  console.log("hello world");
}

const intervalId = setInterval(greet, 2000);
clearInterval(intervalId); */
// clearInterval

/* setTimeout(() => {
  console.log("Interval Stopped");
clearInterval(intervalId);

}, 5000); */

/* function greet(name) {
  console.log(`Hello ${name}`);
}

const intervalId = setInterval(greet, 2000, "qwerty");

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval Stopped");
}, 6000);
 */

/* let countDown = 10;

function updateCountDown() {
  console.log(countDown);
  countDown--;

  if (countDown < 0) {
    clearInterval(intervalId);
    console.log("Time's Up");
  }
}

const intervalId = setInterval(updateCountDown, 1000);
 */

let seconds = 1;

function updateStopWatch() {
  console.log(seconds + " seconds");
  seconds++;
  /*   if (seconds > 10) {
    console.log(seconds);
    clearInterval(stopWatchId);
  } */
}

const stopWatchId = setInterval(updateStopWatch, 1000);

setTimeout(() => {
  clearInterval(stopWatchId);
  console.log("Stopwatch stopped");
}, 10000);
