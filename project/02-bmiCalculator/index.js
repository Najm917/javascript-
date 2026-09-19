const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height == "" || height < 0 || isNaN(height)) {
    console.log(height);
    results.innerHTML = `plese enter a valid height: ${height}`;
  }
  if (weight == "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `plese enter a valid weight: ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000);
    //show result
    results.innerHTML = `<span>${bmi.toFixed(2)}</span>`;
  }
});
