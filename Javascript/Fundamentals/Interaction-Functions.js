// interaction Functions =>
// alert() : message / notification in dialog box
// prompt : captrure input from the user
// confirm : user confirmation

// alert() => ok button

// alert("This is an alert message");

// prompt()

// let name = prompt("Please Enter Your Name: ");
// alert("Hello, " + name);
// console.log(typeof name);
// console.log("Hello, " + name);

/* let age = prompt("How old are you?");
if (age >= 18) {
  alert("You are old enough to access this content");
} else {
  alert("Sorry, you must be at least 18 years old");
}
 */

// Confirm() => true

let result = confirm("Are you sure you want to delete this?");

if (result) {
  alert("Item deleted");
} else {
  alert("Action canceled");
}
