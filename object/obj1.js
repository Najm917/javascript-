/******************non singletone object***********/

// use symbol in object

const sym1 = Symbol("key1");

const obj = {
  name: "najmuddin",
  age: 23,
  gmail: "s.najm09975@gmail.com",
  [sym1]: "mykey1", // to use symbol as key in object we have to use [] and inside that we have to write symbol name
};
// console.log(typeof obj[sym1]);

// console.log(obj);

//

const myobj = {
  name: "najm",
  age: 23,
  fun: function greet() {
    console.log(`hello my name is ${this.name}`);
  },
};

console.log(myobj.fun());
