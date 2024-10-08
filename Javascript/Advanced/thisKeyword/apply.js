// funcion.apply(thisArg, [argsArray])

function introduce(age) {
  console.log(
    `Hello, my name is ${this.firstName} ${this.lastName} and I am ${age} year old`
  );
}

const person = {
  firstName: "abc",
  lastName: "xyz",
};

// introduce.apply(null, [person.name, person.age]);
introduce.apply(person, [20]);
