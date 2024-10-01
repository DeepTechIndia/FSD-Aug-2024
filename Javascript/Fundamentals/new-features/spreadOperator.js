//spreadfOperator => ...

/* const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2[3] = 4;

console.log(arr1 === arr2);
console.log(arr1); // [1,2,3,4]
console.log(arr2); //[1,2,3,4]
 */

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// console.log(arr1 === arr2); //false

/* const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const combined = [...arr1, ...arr2];

console.log(combined); */

const obj = { id: 1, name: "abc" };

const obj2 = { ...obj };
console.log(obj2);
