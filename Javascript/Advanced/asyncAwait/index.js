// Async/await

/* function blockingLoop() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}

console.log("Starting blocking loop operation");
const result = blockingLoop();
console.log("Blocking loop operation completed:", result);
console.log("This will run after the blocking loop operation is completed");
 */
/* 
let promise = new Promise((res, rej) => {
  let success = true;
  if (success) {
    res("Operation is successful");
  } else {
    rej("Operation failed");
  }
});

promise.then((result) => console.log(result)).catch((err) => console.log(err));
 */

/* async function myAsyncFunction() {
  return "Hello, Async";
}

myAsyncFunction().then((result) => console.log(result));
 */
/* 
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function example() {
  console.log("Before Delay");
  await delay(2000);
  console.log("After a delay");
}

example() */
/* 
function fetchDataWithError() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Error: Data fetch failed");
    }, 2000);
  });
}

async function getDataWithErrorHandling() {
  try {
    console.log("Fetching the data");

    const result = await fetchDataWithError();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getDataWithErrorHandling();
 */
/* 
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error.message);
  }
}
console.log("Before Fetch");
fetchData();
console.log("after fetch");
 */

async function fetchUserData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
  }
}
// console.log(fetchUserData());
fetchUserData()
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });
