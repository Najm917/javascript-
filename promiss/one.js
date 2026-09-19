// promis take a function or function take two parameter (resolve, reject)

// ------------------------------------
//  const promisFile = new Promise(function (resolve, reject) {
// setTimeout(function () {

// resolve();
// output-->  (async task is complete) and (promis is done)

//  console.log("async task is complete");
//}, 3000);
// });

// promisFile.then(function () {
//   console.log("promis is done");
// });
//***********************************/

// const promisFile = new Promise(function (resolve, reject) {
//   resolve();
//   // output--> (promis is done) and (async task is complete)

//   setTimeout(function () {
//     console.log("async task is complete");
//   }, 3000);
// });
// promisFile.then(function () {
//   console.log("promis is done");
// });

//   ---------OR---------
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//     console.log("first task is done");
//   }, 2000);
// }).then(() => {
//   console.log("first of second task is done");
// });

//*************************************/
// const promisThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "arif", gmail: "s.najm@gmail.com" });
//     console.log("promise3");
//   }, 1000);
// });

// // resolve's parameter and then parameters are equal

// promisThree.then(function (user) {
//   console.log(user);
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      console.log("arif");
    } else {
      console.log("something went wrong");
    }
  }, 1000);
});

promisefour
  .then(function (user) {
    console.log(user);
    return user.usrename;
  })
  .then(() => {
    console.log(usrename);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise is ether resolve and reject");
  });

//    ----------OR----------

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "arif", password: 123 });
    } else {
      reject("J.S :something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const responce = await promiseFive;
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

/************************************* */

// ----data handle / api manage----

// async function getAllUsers() {
//   try {
//     const responce = await fetch("https://api.github.com/users/Najm917");
//     const data = await responce.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

// --------OR---------

fetch("https://api.github.com/users/Najm917")
  .then((responce) => {
    return responce.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
