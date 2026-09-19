const myDate = new Date();

// console.log(myDate.toISOString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());

console.table([
  myDate.toISOString(),
  myDate.toString(),
  myDate.toLocaleDateString(),
  myDate.toDateString(),
  myDate.toJSON(),
]);
