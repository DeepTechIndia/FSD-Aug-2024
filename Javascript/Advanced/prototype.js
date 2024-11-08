// prototype => behavior => object inherit properties and methods from other objects.

// Prototype

/* let arr = [1, 2, 3];
console.log(arr);

let obj = { name: "abc" };
console.log(obj); */

// (method) => (Prototype) => (prototype) => (prototype) => null;

/* let a = 2;
console.log(a.prototype);
function fun() {}

console.log(fun.prototype); */

/* const person = {
  firstName: "vikram",
  lastName: "Rathod",
};

console.log(person.firstName); //"vikram"
console.log(person.hasOwnProperty("firstName")); //true
console.log(person.toString()); */

// Object.prototype.toString;

/* const arr = [1, 2, 3, 4];

console.log(arr.reverse());
console.log(arr); */

/* function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const person1 = new Person("abc", "xyz");

function Person2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

console.log(person1 instanceof Person); //true
console.log(person1 instanceof Person2); //false */

// console.log(person1);
// console.log(person1.getFullName());

/* let a = "javascript";
String.prototype.reverse = function () {
 
  return this.split("").reverse().join("");
};

console.log(a.reverse());
console.log("prajwal".reverse());
 */

/* Array.prototype.sum = function () {
  console.log(this);
  return this.reduce((acc, cur) => acc + cur, 0);
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.sum()); */

// console.log("1".padStart(2, "0"));

/* Date.prototype.format = function () {
  const day = String(this.getDate()).padStart(2, "0");
  const month = String(this.getMonth() + 1).padStart(2, "0");
  const year = this.getFullYear();

  return `${month}/${day}/${year}`;
};

const today = new Date();
console.log(today.format()); //11/08/2024
 */
