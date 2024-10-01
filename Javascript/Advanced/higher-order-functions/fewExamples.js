/* const products = [
  { name: "laptop", price: 1000, available: true },
  { name: "phone", price: 500, available: false },
  { name: "Tablet", price: 300, available: true },
  { name: "Monitor", price: 150, available: true },
];

//filter out the products available
//give 10% discount
//total

const availableProducts = products.filter((product) => product.available);

console.log(availableProducts);

const discountedProducts = availableProducts.map((product) => ({
  ...product,
  price: product.price * 0.9,
}));

console.log(discountedProducts);


const totalPrice = discountedProducts.reduce(
  (acc, product) => acc + product.price,
  0
);

console.log(totalPrice); */
/* 
const people = [
  { name: "abc", age: 25 },
  { name: "abc", age: 17 },
  { name: "abc", age: 30 },
  { name: "abc", age: 16 },
  { name: "abc", age: 45 },
];

const adults = people.filter((person) => person.age >= 18);
console.log(adults);

const adultAge = adults.map((adult) => adult.age);
console.log(adultAge);

const averageAge =
  adultAge.reduce((acc, age) => acc + age, 0) / adultAge.length;

console.log(averageAge);
// const ageAverage = averageAge / adultAge.length;

const average =
  people
    .filter((person) => person.age >= 18)
    .map((adult) => adult.age)
    .reduce((acc, age) => acc + age, 0) / adultAge.length;
console.log(average);

/* extract the data age > 18
[]
for()
if(product[i]>=18)
Array.push(product[i]) */
/* const people1 = [
  { name: "abc", age: 25 },
  { name: "abc", age: 17 },
  { name: "abc", age: 30 },
  { name: "abc", age: 16 },
  { name: "abc", age: 45 },
];

let filteredData = [];
for (let i = 0; i < people1.length; i++) {
  if (people1[i].age >= 18) {
    filteredData.push(people1[i]);
  }
}

console.log(filteredData);  */
const numbers = [121, 123, 1331, 987, 45654, 890];
/*
[1,2,1] => [1,2,1] => 121
121 === 121


123 => [1,2,3] => [3,2,1] => 321
123 === 321 */

/* const filterPalindromeNumbers = (numers) => {
  return numers.filter((num) => {
    const str = num.toString();
    return str === str.split("").reverse().join("");
  });
};

const palindromeNumbers = filterPalindromeNumbers(numbers);
console.log(palindromeNumbers); */
