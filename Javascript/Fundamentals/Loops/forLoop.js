// Loops => [1,2,3,4,5,6]

// for loops => iterate over a sequence of values

// syntax

// for(initialization; condition; Update){
//     //code to be executed
// }

// val = 2
// condition = val < Array.length

// initialization =>
// condition =>
// update

/* for (let i = 0; i <= 5; i++) {
  console.log(i);
} */
/* 

//iteration
i = 0;
0 <=5 //true
0++

//0


i=1;
1<=5 //true
1++ //1

i=2
2<=5 //true
2++ //2

i=3
3<=5 //true
3++ //3

i=4 
4<=5 //true
4++ //4

i=5
5<=5 //true
5++ //5

i=6
6<=5 //false */

/* for (let i = 0; i < 3; i++) {
  console.log(`i = ${i}`);
}
 */
/* 
let str = "Hello, World";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

const arr = ["apple", "cherry", "mango"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
 */

// 1 - 10

/* let sum = 0;
for (let i = 1; i <= 10; i++) {
  //   sum = sum + i;
  sum += i;
  //   console.log(sum);
}

console.log("The Total sum is", sum); */

//laregestNumber

const numbers = [2, 3, 15, 6, 8, 9, 10];
const number2 = [2, 3, 6, 8, 9, 1, 11, 22, 33];
/* 
function summationOfFunction(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // console.log(sum);
  }

  return sum;
}

console.log(summationOfFunction(numbers)); // 38
console.log(summationOfFunction(number2)); //95
 */

function findLargestNumber(arr) {
  let largestNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

// const numbers = [2, 3, 15, 6, 8, 9, 10];

//l = 2
/* for(i=1; i<length, i++)
if(arr[i]>l)

//3 > 2 => true
l = 3

//l = 3
15 > 3 => true 
l = 15

//6 > 15 => false

//8 > 15 => false

9 > 15 => false

10 > 15 => false

i = 7 */

// console.log(findLargestNumber(numbers)); //15

// reverse string
/* let word = "hello world";

function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(reverseString(word));
 */
/* 
i = 11-1 => 10
i>=0
i--

str[10] = d

i = 9
str[9] = l

i = 0;
str[0] = h

i = -1
 */

/* let arr = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
}

console.log(reverseArray(arr)); //[5,4,3,2,1]
 */

//multiplicationTable
/* 
function multiplicationTable(number, upTo) {
  for (let i = 1; i <= upTo; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

// multiplicationTable(5, 10);
multiplicationTable(6, 20);
 */

//countCharacterOccurance

// 'hello world'
// h
/* function countCharacterOccurance(text, charToCount) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === charToCount) {
      count++;
    }
  }

  return count;
}

let text = "hello world";
let count = countCharacterOccurance(text, "l");

console.log(count); */

// == / === => 5 === '5'

/*i =0       i<11       i++

txt = hello world

if(text[0] ===  "l")
if("h" === "l" ) 

if(text[1] === "l")
"e" === "l"

if(text[2] === "l")

"l" === "l" 

count = 1

"l" == "l"
count =2 
 */

//

/* const cart = [
  {
    name: "apple",
    price: 0.5,
    quantity: 4,
  },
  {
    name: "banana",
    price: 0.25,
    quantity: 6,
  },
  {
    name: "orange",
    price: 0.75,
    quantity: 3,
  },
];

function calculateTotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  return total;
}

console.log(calculateTotal(cart));
 */

//occurance of each element in an array =>[1,2,2,3,4,3,5,6,6,7,6,2]

// {'1' : 1, '2':3, "3":2, '4':1, '5':1, '6': 3, '7':1}

/* function countElementOccurance(arr) {
  const elementCount = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (elementCount[element]) {
      elementCount[element]++;
    } else {
      elementCount[element] = 1;
    }
  }

  return elementCount;
}

console.log(countElementOccurance([1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
console.log(countElementOccurance([1, 2, 2, 3, 4, 3, 5, 6, 6, 7, 6, 2])); */

// [1,2,2,3,4,3,5,6,6,7,6,2]
/* 
i = 0   i<12   i++

element = arr[0] => 1

if(elementCount[1]){}

else{
  elementCount[1] = 1
}


i = 1

element = arr[1] => 2

if(elementCount[2]){}
else { elementCount[2] = 1}

element = arr[2] => 2
if(elementCount[2]){  elementCount[2]++;} */

//camelCase to snake_case

/* function camelToSnake(camelCaseStr) {
  let snakeCaseStr = "";
  for (let i = 0; i < camelCaseStr.length; i++) {
    const char = camelCaseStr[i];
    if (char === char.toUpperCase()) {
      snakeCaseStr += "_" + char.toLowerCase();
    } else {
      snakeCaseStr += char;
    }
  }

  return snakeCaseStr;
}

console.log(camelToSnake("thisIsSnakeCase")); */

// thisIsSnakeCase = this_is_snake_case

// this_is_snake_case => thisIsSnakeCase
/* 
i=0
char = t
if(t === T && t !== t) => false
else => snakeCaseStr = t

i=1
char = h
snakeCaseStr = th

i=2
char = i
snakeCaseStr = thi

i=3
char = s
snakeCaseStr = this

i=4
char = I
if(I === I && I !== i) => true
snakeCaseStr = this_i

i=5
char=s
snakeCaseStr = this_is

i=6
char = C
if(C === C &&  C !==c)
snakeCaseStr = this_is_c */

/* for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
} */
/* 

i=0 j=0
i= 0 j=1
i=0 j=2

i=1 j=0
i=1 j=1
i=1 j=2 

i=2 j=0
i=2 j=1
i=2 j=2  */

for (let i = 1; i <= 5; i++) {
  console.log(`Multiplication table for ${i}`);

  for (let j = 1; j <= 10; j++) {
    let result = i * j;
    console.log(`${i} x ${j} = ${result}`);
  }

  console.log("----------------------");
}
