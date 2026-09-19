const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const total = myArray.reduce((acc, cval) => acc + cval, 0);

// const total = myArray.reduce(function (acc, cval) {
//   console.log(`acc: ${acc}, cval is: ${cval} `);
//   return acc + cval;
// }, 0);
// console.log(total);
//OR
// const total = myArray.reduce((acc, cval) => {
//   return (console.log(`acc: ${acc}, cval is: ${cval} `), acc + cval);
// }, 0);
// console.log(total);

const totalShopingPrice = [
  {
    itemName: "laptop",
    price: 50000,
  },
  {
    itemName: "mobile",
    price: 20000,
  },
  {
    itemName: "watch",
    price: 5000,
  },
];

const total = totalShopingPrice.reduce((acc, cval) => {
  return (
    console.log(`acc: ${acc}, cval is: ${cval.price} `),
    acc + cval.price
  );
}, 0);
console.log(total);
