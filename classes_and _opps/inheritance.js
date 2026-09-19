class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class teacher extends user {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}
const masalaChai = new user("masalaChai");

const chai = new teacher("chai", "chai@gmail.com", 1234);

chai.addCourse();

chai.logMe();
console.log(chai instanceof user);
