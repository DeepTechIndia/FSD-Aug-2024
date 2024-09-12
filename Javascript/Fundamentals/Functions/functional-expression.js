// functional expression => not hoisted

// syntax

// const functionName = function () {};

/* const isPositive = function (number) {
  if (number > 0) {
    return true;
  }

  return false;
};

console.log(isPositive(10));
console.log(isPositive(0)); //false
 */

const evaluateGrade = function (score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
};

const grade = evaluateGrade(85); //"B"

console.log(grade);

// syntax
// hosited / not hoisted
//Must have Name / can bew anonymous
//thriughout the scope / evaluated
