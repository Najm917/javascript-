// falsy value--------->0,-0,'',"",NaN,false,null,undefined,bigint 0n

// truthy value------> "0"all string is true,[],{},fanctin(){}

const emptyobj = {};

if (Object.keys(emptyobj).length == 0) {
  console.log("object is empty");
}

const array = [];

if (array.length == 0) {
  console.log("array is empty");
}

// for (const element of object) {
// }
