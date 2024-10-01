//reduce => single value

// Array.reduce(function(accumulator, cv, i , array), IntialValue)

// const numbers = [1, 2, 3, 4, 5];

/* let accumulator;
accumulator = 0;
for (let i = 0; i < numbers.length; i++) {
  accumulator += numbers[i];
}

console.log(accumulator); */

/* const sum = [1, 2, 3, 4, 5].reduce((accumulator, cv) => accumulator + cv, 0);
console.log(sum); */

/* accumulator =15
cv = 1

0 + 1 => 1


cv = 2 
1 + 2 => 3

cv = 3
3 + 3 => 6

cv = 4
6 + 4 => 10

cv = 5
10 + 5 => 15 */

/* const numbers = [1, 3, 7, 2, 5];

const max = numbers.reduce((max, currentvalue) => {
  return currentvalue > max ? currentvalue : max;
}, numbers[0]);

console.log(max); */
// accumulator = numbers[0]

const fruits = [
  "apple",
  "banana",
  "apple",
  "cherry",

  "mango",
  "apple",
  "cherry",
];

const fruitCount = fruits.reduce((accumlator, currentValue) => {
  accumlator[currentValue] = (accumlator[currentValue] || 0) + 1;
  return accumlator;
}, {});
/* 
const obj = { name: "abc" };
// obj[age] = 20;
console.log(obj["age"]);


accumlator['apple'] = 0 + 1 => 1
accumlatoor['banana'] = 0 + 1 => 1
accumlatoor['apple'] = 1 + 1 => 2

accumlator ={
    'apple': 2
    'banana' : 1
}

// console.log(fruitCount);e

console.log(undefined || 0);
 */

const people = [
  { name: "waseem", age: 23 },
  { name: "adarsh", age: 25 },
  { name: "rakshith", age: 23 },
  { name: "navya", age: 30 },
  { name: "rupesh", age: 25 },
  { name: "prajwal", age: 30 },
];

const groupedByAge = people.reduce((acc, person) => {
  if (!acc[person.age]) {
    acc[person.age] = [];
  }
  acc[person.age].push(person);
  return acc;
}, {});

// {23 : [  { name: "waseem", age: 23 }, { name: "rakshith", age: 23 }], 25:[ { name: "adarsh", age: 25 },{ name: "rupesh", age: 25 }}
console.log(groupedByAge);
/* 
if (!acc[23]) {
  acc[23] = [];
}
acc[23].push(person);


if(!acc[25]){
    acc[25] =[]
}

acc[25].push(person)


if(!acc[23]){

}

acc[25]. push(person) */
