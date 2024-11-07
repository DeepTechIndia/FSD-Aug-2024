// promises => it gives us completion or failure of the asynchronous operation

// container to hold the future value

// three states

// 1. pending
// 2. fulfilled
// 3. rejected

/* 
const myPromise = new Promise((resolve, reject)=>{
    if( //operation is succesful ){
        resolve('succes')
    }
    else{
        reject('Failure')
    }
})
 */

/* let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("completed async task");
    resolve(4);
  }, 1000);
});

console.log(promise);

promise.then((data) => {
  console.log("consumed", data);
});
 */
/* 
let checkEvenOdd = new Promise((resolve, reject) => {
  let number = 5;
  if (number % 2 === 0) {
    resolve(`${number} is even`);
  } else {
    reject(`${number} is odd`);
  }
});

// console.log(checkEvenOdd);

checkEvenOdd
  .then((message) => console.log(message))
  .catch((error) => {
    console.log("Error Occured", error);
  });
 */
/* 
function firstTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("First task Completed");
      resolve("Task 1 Result");
    }, 1000);
  });
}

function secondTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("seconsd task Completed");
      resolve("Task 2 Result");
    }, 1000);
  });
}
function thirdTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("third task Completed");
      resolve("Task 3 Result");
    }, 1000);
  });
}

firstTask()
  .then(secondTask)
  .then(thirdTask)
  .then((finalResult) => {
    console.log("All tasks are completed, final result:", finalResult);
  })
  .catch((err) => {
    console.log(err);
  });
 */

/* const aunthenticateUser = (username, password) => {
  return new Promise((resolve, reject) => {
    const userDatabase = {
      user1: "password123",
      user2: "mypassword",
    };

    setTimeout(() => {
      if (userDatabase[username] && userDatabase[username] === password) {
        resolve("Authentication successful");
      } else {
        reject("Authentication failed");
      }
    }, 1500);
  });
};

aunthenticateUser("user1", "password123")
  .then((message) => console.log(message))
  .catch((err) => {
    console.log(err);
  });
 */

// const processOrder = (order) => {
//   return new Promise((res, rej) => {
//     const isOrderValid = order !== null && order.amount > 0;

//     setTimeout(() => {
//       if (isOrderValid) {
//         res("Order processed succesfully");
//       } else {
//         rej("order processing failed");
//       }
//     }, 2000);
//   });
// };

// const order = { id: 1, amount: 100 };

// processOrder(order)
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));

// finally

const simplePromise = new Promise((res, rej) => {
  const isSuccess = Math.random() > 0.5;

  if (isSuccess) {
    res("operation successful");
  } else {
    rej("Operation failed");
  }
});

simplePromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Operation completed");
  });
