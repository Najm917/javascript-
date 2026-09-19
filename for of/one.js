const myArray = ["superman", "batman", "flash", "aquaman"];

for (const myArr of myArray) {
  // console.log(myArr);
}

const map = new Map();

map.set("+91", "india's code");
map.set("+1", "canada");
map.set("+49", "germany");
map.set("+81", "japan");
map.set("+91", "india");
map.set("+91", "india");
map.set("+91", "india");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}
