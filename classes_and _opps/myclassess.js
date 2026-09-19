// class user {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPssword() {
//     return `${this.password}abc`;
//   }

//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const pass = new user("chai", "chai@gamil.com", 123);

// console.log(pass.encryptPssword(), pass.changeUserName());

// behind the scene using function

function user(username, email, password) {
  return (this.username = username);
  return (this.email = email);
  return (this.password = password);
}

user.prototype.encryptPssword = function () {
  return `${this.password}abc`;
};

user.prototype.changeUserName = function () {
  return `${this.username}`;
};

const tea = new user("tea", "tea@google.com", 1234);

console.log(tea.encryptPssword(), tea.changeUserName());
