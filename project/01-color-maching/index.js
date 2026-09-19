// const button = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// button.forEach((button) => {
//   // console.log(button)
//   button.addEventListener('click', (e) => {
//     // console.log(e.target)
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });

// button.forEach((button) => {
//   button.removeEventListener("click",(e)=>{
//     switch(e.target.id){
//       case  'grey':
//         body.style.backgroundColor = e.target.id;
//       break
//     }
//   })
// }

const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      case "red":
        body.style.backgroundColor = "red";
        break;
      case "green":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        // Optional: Handle unknown ids
        console.warn("Unknown color:", e.target.id);
    }
  });
});
