// forEach

/* Array.forEach(function(currentValue, index, array){

})
 */

/* let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});
 */

/* let fruits = ["Apple", "cherry", "Dates"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(function (fruit) {
  console.log(fruit);
});
 */

/* let languages = ["Javascript", "Python", "Java", "Ruby"];

languages.forEach(function (language, i) {
  console.log(`Language ${i + 1} : ${language}`);
});
 */

/* let grades = [85, 92, 78, 90, 88];

let totalSum = 0;
grades.forEach(function (grade) {
  totalSum += grade;
});

console.log(totalSum);

let classAverage = totalSum / grades.length;
console.log(classAverage.toFixed(2)); */

/* let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = [];

numbers.forEach((number) => {
  doubleNumbers.push(number * 2);
});

console.log(doubleNumbers);
 */
/* 
let shoppingCart = [
  {
    item: "Book",
    price: 12.99,
  },
  {
    item: "Pen",
    price: 1.99,
  },
  {
    item: "NoteBook",
    price: 4.99,
  },
  {
    item: "Pencil",
    price: 0.99,
  },
];

let totalCost = 0;
shoppingCart.forEach((product) => {
  totalCost += product.price;
});

console.log(totalCost);
 */
/* 
let users = [
  { firstName: "Rupesh", lastName: "B Y" },
  { firstName: "Prajwal", lastName: "G H" },
  { firstName: "Rakshith", lastName: "Rakshi" },
  { firstName: "Adarsh", lastName: "S" },
];

let fullNames = [];

users.forEach((user) => {
  let fullName = `${user.firstName} ${user.lastName}`;
  fullNames.push(fullName);
});

console.log(fullNames);
 */
