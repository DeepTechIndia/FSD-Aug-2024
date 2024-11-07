// JSON => Javascript Object Notation

// name value pairs

/* {
    "name" : "abc",
    "age" : 30,
    "isStudent" : false,
    "courses" : ["math", "sciece"], 
    "address" : {
        "city" : "New York",
        "Zip" : "10000"
    }
} */

// JSON.stringify(value, replacer, space)

const user = {
  name: "abc",
  age: 30,
  isStudent: false,
  courses: ["math", "sciece"],
  address: {
    city: "New York",
    Zip: "10000",
  },
};

const jsonString = JSON.stringify(user, null, 20);
console.log(jsonString);
console.log(typeof jsonString);

// JSON.parse

const userDetails = JSON.parse(jsonString);
console.log(userDetails);
console.log(typeof userDetails);
