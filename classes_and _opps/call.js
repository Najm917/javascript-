function setUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const passuser = new createUser("arif", "arif@google.com", "1234");

console.log(passuser);
