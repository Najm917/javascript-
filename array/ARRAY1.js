const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

myArr.pop();
// console.log(myArr);

myArr.push(10);
// console.log(myArr);

myArr.unshift(10);
// console.log(myArr);

myArr.shift();
// console.log(myArr);

// console.log("a", myArr);

const myArr1 = myArr.slice(0, 4);
// console.log(myArr1);

// console.log('B',myArr);

const myArr2 = myArr.splice(0, 4);
// console.log("a", myArr);

// console.log(myArr2);

const heros = ["spiderman", "ironman", "thor", "hulk", "captain america"];

const dc = ["superman", "batman", "wonder woman", "flash", "aquaman"];

heros.push(dc);
// console.log(heros);

dc.push(...heros);
// console.log(dc);

const allHeros = heros.concat(dc);
// console.log(allHeros);

const allHeros1 = [...heros, ...dc];
console.log(allHeros1);
