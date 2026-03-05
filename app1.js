function seoTitle() {
  let title = document.getElementById("title").value;
  let length = title.length;

  document.getElementById("titleResult").innerText = "Meta Title count is " + length;
  // let titleResult = "Meta Title count is " + title.length;
  //   console.log(titleResult.length);
  // let resultDiv = document.getElementById("titleResult");
  // resultDiv.innerText = titleResult;
}

function countLetters() {
  let desc = document.getElementById("desc").value;
  document.getElementById("descResult").innerText = "Meta Description is " + desc.length;

  if (desc.length < 120) {
    descRange.innerText = "Need to Improve - Too Short";
    descRange.className = "text-red-500 font-medium";
  } else if (desc.length <= 160) {
    descRange.innerText = "Optimal";
    descRange.className = "text-green-500 font-medium";
  } else {
    descRange.innerText = "Need to Optimize Meta Description - Too Long";
    descRange.className = "text-amber-500 font-medium";
  }
  // let descResult = "Meta Description count is " + desc.length;
  //  console.log(titleResult.length);
  // let resultDiv = document.getElementById("descResult");
  // resultDiv.innerText = descResult;
}
