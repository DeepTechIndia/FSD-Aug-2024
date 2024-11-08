//javascript => single threaded // line by line

//eventLoop => multiple tasks

// Mechanism

// How

/* Callstack
Web Api
CallbackQueue
Microtask Queue
Event Loop
 */

/* let a = 123;
console.log(a);

async function hello() {
  return;
}
hello();

function print() {}
print();

setTimeout();
console.log("something");
 */

console.log("start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0); //Macrotask

Promise.resolve().then(() => {
  console.log("Insdide Promise");
}); //MicroTask

console.log("End");

/* start
End
Inside Promise
Inside SetTimeout */
