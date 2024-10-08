// THIS keyword => special keyword

/* console.log(this);

function sampler() {
  console.log(this);
}

sampler();
 */

/* const person = {
  firstName: "abc",
  lastName: "xyz",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

person.fullName(); */

/* function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function () {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
  };
}

const person1 = new Person("Pradeep", 40);
console.log(person1.introduce());

const person2 = new Person("qrty", 30);
console.log(person2.introduce());
 */

/* function Book(title, author) {
  return {
    title: title,
    author: author,
    getInfo: function () {
      return this.title + "by" + this.author;
    },
  };
} */

/* const obj = {
  title: title,
  author: author,
  getInfo: function () {
    return title + "by" + author;
  },
}; */

// console.log(obj.getInfo());

/* const book1 = new Book("Harry Potter", "J K Rowling");
console.log(book1); */
// console.log(book1.getInfo());

// const book2 = new Book("atomic habits", "James clear");
// console.log(book2);
// const book3 = new Book("psychology Money", "Morgan");
// console.log(book3);

// Arrow Function => do not have thier own "this"

/* let name = "Global";

const arrowFunction = () => {
  console.log(this);
};

arrowFunction();
 */

/* function outer() {
  this.name = "Outer Scope";
  const arrowFunction = () => {
    console.log(this.name);
  };
  arrowFunction();
}

outer(); */
/* 
function timer() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 1000);
}

timer();
 */
/* 
const obj1 = {
  name: "abc",
  showName: () => {
    console.log(this.name);
  },
};
obj1.showName();

const obj2 = {
  name: "Bob",
};

obj2.showName = obj1.showName;
obj2.showName(); */

/* const person = {
  name: "Charlie",
  normalFunc: function () {
    console.log(this.name);
  },
  arrFunc: () => {
    console.log(this.name);
  },
};

person.normalFunc(); //Charlie
person.arrFunc(); //undefined
 */

/* const user = {
  name: "Bob",
  greet: function () {
    const innerArrFunc = () => {
      console.log(this.name);
    };

    innerArrFunc();
  },
};

user.greet(); */

const person = {
  name: "abc",
  showNameAfterDelay: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

person.showNameAfterDelay(); //abc
