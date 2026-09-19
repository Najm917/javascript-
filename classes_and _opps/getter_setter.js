//class base get set

// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }
//   get password() {
//     return this._password.toUpperCase();
//   }
//   set password(value) {
//     this._password = value;
//   }
// }

// const arif = new User("arif@gmail.com", "abcd");
// console.log(arif.password);

// **************************************

//function base get and set

// function Hello(email, password) {
//   this._email = email;
//   this._password = password;

//   Object.defineProperty(this, "email", {
//     get: function () {
//       return this._email.toUpperCase();
//     },

//     set: function (value) {
//       this._email = value;
//     },
//   });

// Object.defineProperty(this, "password", {
//     get: function () {
//       return this._password.toUpperCase();
//     },

//     set: function (value) {
//       this._password = value;
//     },
//   });
// }

// const najm = new Hello("abc@abc.com", "abc");
// console.log(najm.email);

// object base get and set
// #####################################################

const myobj = {};
