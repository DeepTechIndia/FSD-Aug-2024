// classes => blueprint for cvreating a objects

/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} Years old`
    );
  }
}

const person1 = new Person("abc", 30);
person1.greet();

console.log(typeof person1); */

/* class Car {
  constructor(brand, model, year, mileage) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.running = false;
  }

  start() {
    this.running = true;
    console.log(`${this.brand} ${this.model} is now running`);
  }

  stop() {
    this.running = false;
    console.log(`${this.brand} ${this.model} is now stopped`);
  }

  drive(distance) {
    if (this.running) {
      this.mileage += distance;
      console.log(
        `${this.brand} ${this.model} drove ${distance} miles. Total mileage is now ${this.mileage} miles`
      );
    } else {
      console.log(`You need to start the ${this.brand} ${this.model} first`);
    }
  }

  info() {
    console.log(
      `Car Info: ${this.brand} ${this.model}, Year: ${this.year}, Mileage :  ${this.mileage}`
    );
  }

  static compareMileage(car1, car2) {
    if (car1.mileage > car2.mileage) {
      console.log(`${car1.brand} ${car1.model} has more mileage`);
    } else if (car1.mileage < car2.mileage) {
      console.log(`${car2.brand} ${car2.model} has more mileage`);
    } else {
      console.log(`Both cars have same mileage`);
    }
  }
}

const myCar = new Car("Toyota", "Corolla", 2020, 15000);
const yourCar = new Car("Honda", "Civic", 2019, 20000);

// myCar.info();
// myCar.start();
// // myCar.stop();
// myCar.drive(100);
// myCar.stop();

myCar.compareMileage(myCar, yourCar);
 */

// polymorphism
// encaposulation

// React => classes

// ES6

// inheritance
/* 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} Years old`
    );
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  describeJob() {
    console.log(`I am a ${this.jobTitle}`);
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} Years old and i am a ${this.jobTitle}`
    );
  }
}

const employee1 = new Employee("Waseem", 22, "Software Developer");
employee1.greet();
employee1.describeJob();
 */

class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  getDetails() {
    return `${this.title} by ${this.author}`;
  }

  getPrice() {
    return `${this.price.toFixed(2)}`;
  }
}

class PrintedBook extends Book {
  constructor(title, author, price, pages) {
    super(title, author, price);
    this.pages = pages;
  }

  getDetails() {
    return `${super.getDetails()} - ${this.pages} pages`;
  }
}

class EBook extends Book {
  constructor(title, author, price, fileSize) {
    super(title, author, price);
    this.fileSize = fileSize;
  }

  getDetails() {
    return `${super.getDetails()} - ${this.fileSize} MB`;
  }
}

const printedBook = new PrintedBook("The Great Gatsby", "Scott", 10.99, 180);

const ebook = new EBook("1984", "George", 5.99, 2);

console.log(printedBook.getDetails());
console.log(ebook.getDetails());
