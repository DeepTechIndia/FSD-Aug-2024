// closure

/* function createMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5));


 */

function outerFunction() {
  let outerVariable = " I am from outer funtion";
  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closure = outerFunction();
closure();

//iiff

(function iiff() {
  console.log("i only run once");
})();

// iiff();
