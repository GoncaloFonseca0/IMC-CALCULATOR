let button = document.querySelector("#btn");

// button.addEventListener("click", myClick);

function calculateImc(event) {
  console.log("calculate");
  event.preventDefault();

  let weight = document.querySelector(".weight-input-js").value;
  let height = document.querySelector(".height-input-js").value;
  let result = document.querySelector(".result-Imc");
  //let resultParagraph = document.querySelector(".result-Paragraph");
  let calcImc = weight / (height * height);

  result.innerHTML = calcImc;

  console.log(weight, height);

  if (weight === "0" || weight < "0") {
    result.innerHTML = "provide a valid weight";
  } else {
  }
  if (height === "0" || height < "0") {
    result.innerHTML = "provide a valid height";
  } else {
    result = document.querySelector(".result-Imc");
  }

  if (calcImc < 18.6) {
    result.innerHTML = "under weight";
    result.style.backgroundColor = "green";
  } else {
  }
  if (calcImc > 18.6 && 24.9) {
    result.innerHTML = "normal";
  } else {
    if (calcImc > 24.9) {
      result.innerHTML = "over weight";
    }
  }
}

// let imc = weight / (height * height);

// console.log(imc);

//() => console.log(`%cO meu IMC É ${math.round(imc)}`, `imcColor: ${imcolor}`),13000)
//   13000
// );
