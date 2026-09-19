// map---> map also hold unique value

const map = new Map();

map.set("+91", "india");
map.set("+1", "canada");
map.set("+49", "germany");
map.set("+81", "japan");
map.set("+91", "india");
map.set("+91", "india");
map.set("+91", "india");
// console.log(map);

/**** chain method ******/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myArr = arr
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 30)
  .map((num) => {
    return `convert the number is ${num - 20}`;
  });

console.log(myArr);
