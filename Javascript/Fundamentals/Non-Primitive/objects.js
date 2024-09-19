//objects => collection of data, key value pair, we dont have indexing
// datas, functions

// syntax
// let obj = {key : value, key:value}

/* const person = {
  name: "Abc",
  age: 30,
  occupation: "developer",
};

console.log(person);

const obj = new Object();
obj.name = "abc";
obj.age = 30;

console.log(obj);
 */

const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  publishedYear: 1960,
  genres: ["Fiction", "Classics", "Historical"],
  getSummary: function (bookObj) {
    return `${bookObj.title} by ${bookObj.autrhor}`;
  },
};

const student = {
  firstName: "Punith",
  lastName: "Rajkumar",
  age: 25,
  courses: ["Mathematics", "Physics", "Compuiter Science"],
  isGraduated: false,
  getFullName: function (Obj) {
    return `${Obj.firstName} ${Obj.lastName}`;
  },
};

/* obj = student;
obj = student1; */

// console.log(student.getFullName(student));

/* const student1 = {
  firstName: "Punith",
  lastName: "Rajkumar2",
  age: 25,
  courses: ["Mathematics", "Physics", "Compuiter Science"],
  isGraduated: false,
};

console.log(student.firstName);
console.log(student.getFullName(student1)); */

/* console.log(student);
console.log(student.courses);

console.log(student["firstName"]);
console.log(student["isGraduated"]);
 */
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2024,
  color: "Blue",
  start: function () {
    console.log("Car Started");
  },
};

/* car.owner = "Abc";
car.color = "Red";
console.log("Car details--->", car);

delete car.year;
console.log("Car details after deleteing--->", car);
 */

// Object.keys() => array of key name

let carKeys = Object.keys(car); //["make", "model", "year", "ciolor", "start"]
console.log(carKeys);

// Object.values() => [] of values
console.log(Object.values(car));

//Object.entries => [] of the objects key-value pairs

let entries = Object.entries(car);
console.log(entries);
