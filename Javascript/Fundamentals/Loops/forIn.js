// for-In => properties of an object

// for(let key in object){}

const person = {
  name: "Jhon",
  age: 30,
  city: "New York",
};

/* for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}
 */
/* 
function hasProperty(obj, prop) {
  for (const key in obj) {
    if (key === prop) {
      return true;
    }
  }

  return false;
}

console.log(hasProperty(person, "age"));
console.log(hasProperty(person, "Job")); */

/* const expenses = {
  food: 200,
  rent: 1000,
  utilities: 300,
  transportation: 150,
};

function calculateTotalExpenses(obj) {
  let totalExpenses = 0;
  for (let prop in obj) {
    totalExpenses += obj[prop];
  }

  return totalExpenses;
}

console.log(calculateTotalExpenses(expenses));
 */

const scores = {
  math: 85,
  science: 90,
  kannada: 95,
  history: 92,
};

const score1 = {
  math: -100,
  science: 90,
  kannada: -20,
  history: -120,
};

function maxScore(obj) {
  let maxScore = 0;
  for (let prop in obj) {
    if (obj[prop] > maxScore) {
      maxScore = obj[prop];
    }
  }

  return maxScore;
}

// -1 > 0 => false
console.log(maxScore(score1));

/* const colors = ["red", "blue", "green"];

for (const index in colors) {
  console.log(`Index ${index} : ${colors[index]}`);
}
 */
