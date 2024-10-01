//map

/* let newArray = array.map(function (currentValue, index, array) {
  //logic
});
 */

let numbers = [1, 2, 3, 4, 5];
/* let doubleNumbers = [];

numbers.forEach((number) => {
  doubleNumbers.push(number * 2);
});

console.log(doubleNumbers);
 */

// ------------------------
/* let doubleNumber = numbers.map(function (number) {
  return number * 2;
});

console.log(doubleNumber); */

/* let users = [
  { firstName: "Rupesh", lastName: "B Y" },
  { firstName: "Prajwal", lastName: "G H" },
  { firstName: "Rakshith", lastName: "Rakshi" },
  { firstName: "Adarsh", lastName: "S" },
];

let fullName = users.map((user) => `${user.firstName} ${user.lastName}`);
console.log(fullName);
 */

let orders = [
  { orderId: 1, customer: { name: "waseem", address: "hassan, karnataka" } },
  { orderId: 2, customer: { name: "Raksha", address: "hassan, karnataka" } },
  { orderId: 3, customer: { name: "Navya", address: "bengaluru, karnataka" } },
  {
    orderId: 4,
    customer: { name: "Lakshmi", address: "bengaluru, karnataka" },
  },
];

let customerName = orders.map((order) => order.customer.name);
console.log(customerName);
