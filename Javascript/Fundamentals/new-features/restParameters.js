// Rest Parameters => indefinite number of arguments as a array

/* const [first, ...restOfTheValues] = [1, 2, 3, 4, 5, 6];

console.log(first);
console.log(restOfTheValues);
 */
/* 
const person = { name: "abc", age: 25, proffesion: "Explorer" };

const { name, ...rest } = person;

console.log(name);
console.log(rest);
 */

/* function example(...args) {
  console.log(args);
}
example(1, 2, 3, 4, 5);
 */
/* 
function sum(...num) {
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += num[i];
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));
console.log(sum(0, 9, 8, 7, 6, 5, 4, 3)); */

// [1,2,3]
// 1,2,3,4,5
// spread => expand the array into individual elements => 1 2 3
//restOperator => pack the elements into object

// ES6 => let, const, arrow functions,  TL, spread, destructuring, rest
