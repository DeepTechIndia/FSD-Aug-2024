//Date => object

//7 year, month, day, hour, minute, second, milisecond
/* let now = new Date();
console.log(now); */

// 'January 1 1970'

/* let milisecond = new Date(1672531200000);
console.log(milisecond); */

/* let year = now.getFullYear();
console.log(year);
console.log(now.getMonth()); //8
console.log(now.getDay()); //3

/* sunday =>0
saturday = 6 */

/* console.log(now.getHours());

console.log(now.getMinutes()); //0-59

console.log(now.getSeconds());

console.log(now.getMilliseconds());
console.log(now.getTime());

console.log(now.toISOString());

console.log(now.toDateString());
console.log(now.toTimeString()); */

/* const date = new Date();
const tokyoTime = date.toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
console.log(tokyoTime);

const LondonTime = date.toLocaleString("en-GB", { timeZone: "Europe/London" });
console.log(LondonTime);

const indianTime = date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
console.log(indianTime);

 */

/* const date = new Date();
console.log(date); */

/* function futureDate(daysToAdd) {
  let currentDate = new Date();
  let future = new Date(
    currentDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000
  );
  return future;
}

console.log(futureDate(2));
console.log(futureDate(3));
console.log(futureDate(4));


 */

function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

console.log(formatDate(new Date()));
