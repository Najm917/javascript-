const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);

const myobj = {
  name: "chai",
  price: 200,
  isAvailble: true,
};

console.log(Object.getOwnPropertyDescriptor(myobj, "price"));

const abc = Object.defineProperty(myobj, "price", {
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(myobj, "price"));
