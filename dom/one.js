// const title = document.getElementById("title");
// title.style.background = "red";

// const myli = document.querySelector("li");
// myli.style.color = "red";           // only first element select

// const myli = document.querySelectorAll("li");
// myli[1].style.color = "red";  //select by the index

const myli = document.querySelectorAll("li");
const convertedArray = Array.from(myli);

convertedArray.forEach((li) => {
  li.style.backgroundColor = "orange";
});
