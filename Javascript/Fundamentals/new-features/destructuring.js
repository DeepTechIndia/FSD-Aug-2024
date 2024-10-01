// destructing => unpack the values from an array or properties

const fruits = ["apple", "banana", "qwerty"];

const first = fruits[0];
const second = fruits[1];
const third = fruits[2];

/* console.log(first);
console.log(second);
console.log(third); */

/* const [a, b, c] = fruits;
console.log(a);
console.log(b);
console.log(c); */
/* 
const [a, b, c, d, e] = fruits;

console.log(a, b, c, d, e); */
// console.log(thirdFruit);
/* 
const [firstFruit, secondFruit, thirdFruit = "cherry"] = fruits;

console.log(firstFruit, secondFruit, thirdFruit); */

const person = { name: "abc", address: { city: "bengaluru", zip: "100001" } };

console.log(person.address.city);

/* const name = person.name;
console.log(name); */
/* 
const { name: fullName, age = 25, city = "Unknown" } = person;

console.log(fullName);
console.log(age);
console.log(city);
 */
/* 
const {
  name,
  address: { city, zip },
} = person;

console.log(city);
console.log(zip);

const colors = ["red", ["green", "lightgreen"], "blue"];

const [a, [b, c], d] = colors;

console.log(a, b, c, d); */

function printFruits([first, second, third]) {
  console.log(first);
  console.log(second);
  console.log(third);
}

printFruits(["apple", "banana", "cherry"]);
