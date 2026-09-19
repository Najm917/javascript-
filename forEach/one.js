// forEach loop special design for arr

const myArray = ["js", "python", "java", "cpp"];

// myArray.forEach((element) => {
//   console.log(element);
// });

// myArray.forEach(function (val) {
//   console.log(val);
// });

const arrayList = [
  {
    userName: "arif",
    userId: 123,
  },
  {
    userName: "najm",
    userId: 456,
  },
  {
    userName: "uddin",
    userId: 876,
  },
];

arrayList.forEach((element) => {
  // console.log(element.userName);
});

arrayList.forEach((element) => {
  // console.log(element.userId);
});

// inside forEach loop we can not use break and continue statement. if we want to use break and continue statement then we have to use for loop instead of forEach loop.

// foreach accept multi pararmeter

const myarrrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myarrrr.forEach((element, index, array) => {
  // console.log(element, index, array);
});
