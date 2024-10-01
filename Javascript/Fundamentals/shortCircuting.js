//short circuting => 12 11

//logical  or

let a = true || false; //true
let b = false || true; //true

let c = 0 || 42; //42

let d = null || "Hello"; //Hello

//logical and

let e = true && false; // false
let f = false && true; // false

let g = 1 && 0 && 3; //0

let h = null && "Hello"; //null

/* let user = {
  isLoggedIn: true,
  hasAccess: true,
  name: "Vicky",
};

if (user.isLoggedIn && user.hasAccess) {
  console.log(`Welcome, ${user.name}`);
} else {
  console.log("access denied");
}
 */
/* 
loggedIn = true

logeedIn && userProfile */

//node => environment run your code

//nullish collasing operator
// returns right hand operand  when the left hand value is null or undefined

// let result = a ?? b;
/* 
let name;
let defaultName = "Guest";

let displayName = name ?? defaultName;

console.log(displayName);

 */

/* let count = 0;
let defaultCount = 10;

let finalCount = count ?? defaultCount;
console.log(finalCount);
 */

let firstName = null;
let lastName = null;
let nickname = "Jhony";
let defaultName = "Guest";

let displayName = firstName ?? lastName ?? nickname ?? defaultName;
console.log(displayName);

let value = 0;
let fallback = 40;

let result = (value || fallback) ?? "No value";

console.log(result);
