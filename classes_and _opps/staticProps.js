class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username: ${this.username}`);
  }
  static createId() {
    return `1234`;
  }
}
const arif = new User("arif");
// console.log(arif.createId());

class teacher extends User {
  constructor(username, email) {
    super(User);
    this.email = email;
  }
}
const hello = new teacher("hello", "hello@gmail.com");
console.log(hello.createId());
