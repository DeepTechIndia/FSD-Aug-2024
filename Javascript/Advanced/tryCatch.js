// try/catch

/* 
try{

}catch(error){

} */

/* try {
  let x = y;
} catch (error) {
  console.log("Error Caught", error.message);
}
 */

/* const jsonString = '{"name" : "Jhon"}';

try {
  const user = JSON.parse(jsonString);
  console.log(user);
} catch (error) {
  console.log("Invalid JSON format:", error.message);
}
 */
/* 
try {
  let x = 5;
  let result = x / 0;
  console.log(result);
} catch (error) {
  console.log("Error Caught:", error.message);
} finally {
  console.log("This runs no matter what!");
}
 */

function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  const result = divideNumbers(10, 0);
  console.log(result);
} catch (error) {
  // console.log(error);
  console.error("Error", error.message);
}
