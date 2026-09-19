// reat a function that takes in an unlimited number of arguments and returns them as an array

function myFunction(...numbers) {
  return numbers;
}
// console.log(myFunction(3, 3, 3, 3, 3, 4, 5, 6, 4));

/****pass object as an argument to a function and access its properties*/

const userDetails = {
  name: "arif",
  age: 22,
  city: "belagvi",
};

function userInfo(user) {
  return {
    name: user.name,
    age: user.age,
    city: user.city,
  };
}

const userInformation = userInfo(userDetails);
// console.log(userInformation);

/***pass array as an argument to a function and access its elements */

const numbers = [1, 2, 3, 4, 5];

function processNumbers(arr) {
  return arr.map((num) => num * 2);
}

const doubledNumbers = processNumbers(numbers);
console.log(doubledNumbers);

function getSecondElement(arr) {
  return arr[1];
}

const myReturnValue = getSecondElement(numbers);
console.log(myReturnValue);

const myReturnValue1 = getSecondElement([10, 20, 30, 40]);
console.log(myReturnValue1);
