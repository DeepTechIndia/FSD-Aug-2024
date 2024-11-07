// promise.all
/* 
const promise1 = Promise.resolve(3);

const promise2 = 42;
const promise3 = new Promise((res, rej) => {
  setTimeout(rej, 100, "foo");
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.log(err));
 */

//   promise.race()

/* const promise1 = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});
const promise2 = new Promise((res, rej) => {
  setTimeout(rej, 100, "two");
});

Promise.race([promise1, promise2])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err));
 */

//   promise.allSettled()
// settled => fulfilled or rejected
/* 
const promise1 = Promise.resolve(3);

const promise2 = Promise.resolve(42);
const promise3 = new Promise((res, rej) => {
  setTimeout(rej, 100, "foo");
});

Promise.allSettled([promise1, promise2, promise3]).then((result) =>
  result.forEach((res) => console.log(res.status))
);
 */

// promise.any()
/* const promise1 = Promise.resolve("Erro1");

const promise2 = Promise.resolve("Success 1");

const promise3 = new Promise((res, rej) => {
  setTimeout(rej, 500, "success 2");
});

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
 */