// bind => create a new function

// function.bind(thisArg, arg1, arg2)

/* const person = {
  fullName: function (city, country) {
    console.log(
      `Hello my name is ${this.firstName} ${this.lastName}. i live in ${city}, ${country}`
    );
  },
};

const boundPerson1 = person.fullName.bind(person1, "bengaluru", "india");
boundPerson1();
 */

const module1 = {
  x: 40,
  getX: function () {
    return this.x;
  },
};

const boundGetX = module1.getX.bind(module1);
console.log(boundGetX());
