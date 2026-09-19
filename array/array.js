const number = [1, 2, 3, [4, 5, 6], 7, [8, 9, (3)[(1, 3, 5)]]];

const another_number = number.flat(Infinity);
// console.log(another_number);

/********any object or anythin to array********/

// console.log(Array.isArray("arif")); //check if it is array or not
// console.log(Array.from("najmuddin")); //convert string to array
// console.log(Array.from({ name: "najm" })); //convert object to array

const num1 = "arif";
const num2 = 400;
const num3 = 500;
console.log(Array.of(num1, num2, num3)); //convert any number to array
