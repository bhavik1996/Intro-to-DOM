// Intro to DOM
// omnicalculator.com - BMI calculator

function hide() {
  let male = document.getElementById("male");
  let female = document.getElementById("female");
  let height = document.getElementById("height");
  let weight = document.getElementById("weight");
  let submit = document.getElementById("submit");

  let result = (weight.value / (height.value * height.value)) * 10000;
  let resultDiv = document.getElementById("result");
  resultDiv.innerText = result.toFixed(2);

  if (result < 18.5) {
    report.innerText = "Underweight";
  } else if (result >= 18.5 && result <= 24.9) {
    report.innerText = "Normal Weight";
  } else if (result >= 25 && result <= 29.9) {
    report.innerText = "Overweight";
  } else if (report >= 30 && result <= 35) {
    report.innerText = "Obesity";
  } else {
    report.innerText = "Sever obesity";
  }
  //   report.innerText = "Report showing";
  submit.style.display = "none";
}
