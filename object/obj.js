/**************************
 *             object     *
 **************************/

// var obj={
//    empid:"ab123",
//     empname:"najm",
//     empmail:"s.najm08875@gmail.com",
//     empdit: null
// }

// console.log(obj.empid)
// console.log(obj[0])
// console.log(
//     obj[
//         (function(){
//             return "emp" + "id";
//         })()
//     ]
// );

/***************to check any in here in object***************/

// console.log("empid" in obj)

/**********update value**********/

// obj.empid="12345"

// console.log(obj.empid)

/*****************obj refference and coping*****************/

// let obj ={
//     empid:1234
// }
// let obj1=obj
// console.log(obj)

// let abc={}
// let abcd=abc
// console.log(abcd==abc)  // true
// console.log(abcd===abc)   // true
// console.log(abc=={})    // false becouse both {} sore in different memory location

/*****************cloning , merging and assining******************/

// let user={
//     name:"arif"
// };
// let user1={
//     name1:"najm"
// };
// let user2={
//     age:19,
//     hovies:["video game play" , "gym" , "sleeping"]
// };
// let user3={
//     address:"begusarai"
// };
// let anotheruser={}

// Object.assign(anotheruser,user,user3, user2.hovies)
// console.log(anotheruser)

/****************check entytes in obj****************/

// console.log(Object.entries(user2))

/****************check how many keys in obj****************/
// console.log(Object.keys(user2))

/****************check how many values in obj****************/
// console.log(Object.values(user2))

/****************how to wtite a function  in an object****************/

// var car={
//     color:"red",
//     model:"xyz",
//     move:function move(){
//         console.log("move  method is stsrted.....")
//     },
//     price:1000000
// }

// console.log(car.price)

/**********shorthand to write a function in an object ********** */

// var car={
//     color:"red",
//     model:"xyz",
//     move(){
//         console.log("move  method is stsrted.....")
//     },
//     price:1000000
// }

// console.log(car.move)

/********this in js********** */

// console.log(this.alert("hii"))

// console.log(car.move())

//( price=300000 is aassium the car price  and abc assium car function  )

// var price=300000;
// var abc= car.move;
// console.log(abc())

/*************call apply and bind ****************/

/*************call method ***********/

// let obj1={
//     empFname:'arif',
//     empLname:'alam'
// }

// let obj2={
//     empFname:'najm',
//     empLname:'uddin'
// }
// let obj3={
//     empFname:'syeed',
//     empLname:'arif'
// }

// function objfunction(){
//     return this.empFname +" " +this. empLname
// }
// console.log(objfunction.call(obj1))
// console.log(objfunction.call(obj2))
// console.log(objfunction.call(obj3))

/***********when inside object not passing the  argument  *********/

// let obj1={
//     empFname:'',
//     empLname:''
// }

// let obj2={
//     empFname:'',
//     empLname:''
// }
// let obj3={
//     empFname:'',
//     empLname:''
// }

// function objfunction(fname,lname){
//      this.empFname=fname;
//      this.empLname=lname;
//     return this.empFname +" " +this. empLname
// }
// console.log(objfunction.call(obj1 , "arif" , "alam"))
// console.log(objfunction.call(obj2, "najm" , "uddin"))
// console.log(objfunction.call(obj3 , "amit", "kumar"))

/*************apply method (apply and call metthod same but still apply use [] ) ***********/

// let obj1={
//     empFname:'',
//     empLname:''
// }

// let obj2={
//     empFname:'',
//     empLname:''
// }
// let obj3={
//     empFname:'',
//     empLname:''
// }

// function objfunction(fname,lname){
//      this.empFname=fname;
//      this.empLname=lname;
//     return this.empFname +" " +this. empLname
// }
// console.log(objfunction.apply(obj1 ,[ "arif" , "alam"]))
// console.log(objfunction.apply(obj2, ["najm" , "uddin"]))
// console.log(objfunction.apply(obj3 , ["amit", "kumar"]))

/**************bind************ */

// let obj1={
//     empFname:'',
//     empLname:'',
//     objfunction(fname,lname){
//         this.empFname=fname;
//         this.empLname=lname;
//        return this.empFname +" " +this. empLname
//    },
// }

// let obj2={
//     empFname:'',
//     empLname:''
// }
// let obj3={
//     empFname:'',
//     empLname:''
// }

// var empname= obj1.objfunction;
// console.log(empname.bind(obj3, "arif", "alam")())

//or

// let empname=obj1.objfunction.bind(obj3, "najm" ,"uddin")
// console.log(empname())
// console.log(obj3)

/************create object by using constracture function*************/
// function Employee(firstname, lastname ){
//     this. firstname=firstname
//     this.lastname=lastname
// }

// let obj= new Employee("rahul", "kumar")
// console.log(obj)

// new empty ({}) object
// function will be called , ' this ' will be pointed to the neyly createt onject

// ({}) will be link to the prototype
// automatically will return the newly created object

/********object prototype ********/

// function Employee(firstname, lastname ){
//     this. firstname=firstname
//     this.lastname=lastname
// }
// let obj1 = new Employee("najm" , "uddin")

// Employee.prototype.getName =function( ){
//     return this.firstname+ " "+ this.lastname

// };
// let obj  = new Employee("md", "arif")
// console.log(obj.getName())

/*************property flag and description***********/

let obj = {
  fname: "najm",
  lname: "uddin",
  role: "devloper",
};
// console.log(obj)

//____________________________________________________________________

// delete obj.fname
// console.log(obj)

//writable  :----------- write any thing and update the value
// obj.fname="madan"  // updatable modifyble

// let objectPropertyDetails= Object.getOwnPropertyDescriptors(obj, 'fname')
// console.log(objectPropertyDetails)

//  enumerable :---------- check property usins loop an keys
// console.log(Object.keys(obj))
/** OR**/
//  for(let prop in obj) console.log(prop)

//  configurable :--------  by default all the true and change property and not modify not update ete..

/*****
            ******* syntax*******
Object.defineProperty(objname, property, discretor)
******/

// Object.defineProperty(obj,'fname',{
//         writable:false
//     })
//     obj.fname="madan"
//     console.log(obj)

//____________________________________________________________________

// Object.seal(obj)
// can't add new property in it
// can't delete existing property
//make all property as non configurable
// you can update the existing property value

//____________________________________________________________________

Object.freeze(obj);
// non-writable
// non-enumerable
// property can not be change

//____________________________________________________________________

var list = [1, 2, 3, 4, 5];

var newList = list.map(function (item, index, arr) {
  return item * 3;
  // console.log(arr)
});
console.log(list);
console.log(newList);

var filteredData = list.filter(function (item, index, arr) {
  return index > 1;
});

console.log(filteredData);
