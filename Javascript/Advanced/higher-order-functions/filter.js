//filter => test each and evry element. returns true => keeps the element,
// false => it wont keep the element

// Array.filter(function(cuurentelemt, index, array))

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

const oddNumbers = numbers.filter(function (number) {
  return number % 2 !== 0;
});

console.log(oddNumbers);
 */

/* const people = [
  { name: "abc", age: 17 },
  { name: "xyz", age: 22 },
  { name: "lmn", age: 15 },
  { name: "ijk", age: 19 },
];

const adults = people.filter((person) => person.age >= 18);
console.log(adults);
 */

const strings = ["Hello", "", "world", "", "Javascript"];

const nonEmptyStrings = strings.filter((str) => str !== "");

// console.log(nonEmptyStrings);
// console.log("Hello" == true);

// "hello" == true => true

/* const products = [
  { name: "laptop", price: 1000, available: true },
  { name: "phone", price: 500, available: false },
  { name: "Tablet", price: 300, available: true },
  { name: "Monitor", price: 150, available: true },
];

const availableProducts = products.filter(
  (product) => product.price < 600 && product.available
);

console.log(availableProducts);
 */

/* const tasks = [
  { task: "Do laundry", completed: true },
  { task: "Clean Room", completed: false },
  { task: "Buy groceries", completed: false },
  { task: "Cook breakfast", completed: true },
];

const incompletetask = tasks.filter((task) => !task.completed);

console.log(incompletetask); */

/* const events = [
  { title: "Conference", date: new Date("2024-10-01") },
  { title: "Meetup", date: new Date("2024-08-15") },
  { title: "WorkShop", date: new Date("2024-09-30") },
  { title: "Hackathon", date: new Date("2024-09-25") },
];

const today = new Date();
// console.log(today);

const upComingEvents = events.filter((event) => event.date > today);
console.log(upComingEvents);
 */
