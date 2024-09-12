// Logical Operator

// logival AND
// logicaL OR
//logical NOT

let a = 1;
let b = 2;

// AND (&&)
let isBothTrue = a > 0 && b > 0; //true
console.log(isBothTrue);

console.log(5 > 4 && 4 >= 3); //true
console.log(5 < 4 && 4 >= 3); //false

// logical OR (||)
let isEitherTrue = a > 0 || b < 0; //true
console.log(isEitherTrue);

console.log(1 < 0 || 2 < 0 || 3 > 3); //false

// LogicalNOT (!)
let isNotTrue = !(a > 2); //true
console.log(isNotTrue);
