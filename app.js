// Intro to DOM
// omnicalculator.com - BMI calculator

function hide() {
  let male = document.getElementById("male");
  let female = document.getElementById("female");
  let height = document.getElementById("height");
  let weight = document.getElementById("weight");
  let submit = document.getElementById("submit");

  let result = ((weight.value / (height.value * height.value)) * 10000).toFixed(2);
  let resultDiv = document.getElementById("result");
  resultDiv.innerText = result;
  //   report.innerText = "Report showing";
  submit.style.display = "none";
}
