// inside the object we can have another object and we can access the value of that object by using dot notation
const myobj = {
  email: "s.najm09975@gmail.com",
  fullname: {
    userFullname: {
      fName: "najm",
      lName: "uddin",
    },
  },
};

console.log(myobj.fullname.userFullname.fName);

/***************** two and more objects are combine*************/

const obj1 = { 1: "arif", 2: "alam" };
const obj2 = { 3: "najm", 4: "uddin" };

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
/************OR***********/

const obj3 = Object.assign({}, obj1, obj2); // {}this is the  target obj and obj1 and obj2 are the source object

// console.log(obj3);


const users=[
  {
    name:"arif",
    age:23,
    email:"arif@gmail.com"
  },
  {
    name:"najm",
    age:25,
    email:"najm@gmail.com"
  },

  {
    name:"amit",
    age:22,
    email:"amit@gmail.com"
  }
]

// console.log(users[2].name);

const tinderUser={
  id:12345,
  name:'arif',
  isLoggedIn:true
}

const keys=Object.keys(tinderUser)
console.log(keys);

const values=Object.values(tinderUser)
console.log(values);

console.log("name" in tinderUser);

