//call => arguments individually

// function.call(thisArg, arg1, arg2, arg3)

/* function sayHello() {
  console.log(`Hello, ${this.name}`);
}

const person1 = {
  name: "abc",
};

const person2 = {
  name: "xyz",
};

sayHello.call(person1);
sayHello.call(person2); */

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "puneeth",
  lastName: "rajkumar",
};

const person2 = {
  firstName: "shivaraj",
  lastName: "rajkumar",
};
console.log(person.fullName.call(person1, "Bengaluru", "India"));
console.log(person.fullName.call(person2, "Bengaluru", "India"));
