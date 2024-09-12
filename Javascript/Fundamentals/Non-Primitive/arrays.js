// Arrays => Special Object => []

/* 
const mixedValues = [
  1,
  "hello",
  true,
  null,
  10.5,
  undefined,
  [1, 2, 3],
  [1, [2, 3]],
];

console.log(mixedValues);
// new => create a instanmce / copy
let arr = new Array("apple", 1, 2, 3);
console.log(arr);

 */

// const numbers = [1, 2, 3, 4, 5];
/* const fruits = ["apple", "Mango", "cherry"];

console.log(fruits[1]); //Mango

fruits[5] = "banana";

console.log(fruits);
 */

//Array Methods

// const fruits = ["apple", "Mango", "cherry"];

// console.log(fruits.length); //3

// push => add elements to the end of the array

// fruits.push("orange");

/* const arr = [];
arr.push(1);
arr.push(2);
arr.push(3); */
/* 
console.log(arr); //[1,2]
console.log(fruits); */

// pop => removes the last element from an array
/* console.log(fruits);
fruits.pop();
console.log(fruits); */

//shift()

// let removedFruit = fruits.shift();
/* 
console.log(fruits.shift()); //apple
console.log(fruits); //[mango,cherry,orange] */

//unshift()

// fruits.unshift("lemon");
// console.log(fruits);push

fruits.splice(2, 2, "banana"); //["apple","lemon","banana","cherry"]
console.log(fruits);
 

//slice
/* 
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 3); //[2,3] */

// includes
/* let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(6)); //false */

// indexof
/* let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(2)); //1 */

//join

/* let arr = [1, 2, 3];
console.log(arr.join("-"));
console.log(arr.join(""));push

let newArr = arr1.concat(arr2); //[1,2,3,4,5,6]
 */

//reverse()
/* let arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());
 */

// flat()
/* let arr = [1, [2, [3, [4]], 5]];

let flatArr = arr.flat(2); //[1,2,3,[4],5]
console.log(flatArr);

console.log(arr.flat(Infinity));
 */



