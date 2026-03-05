function seoTitle() {
  let title = document.getElementById("title");

  let titleResult = "Meta Title count is " + title.length;
  //   console.log(titleResult.length);
  let resultDiv = document.getElementById("titleResult");
  resultDiv.innerText = titleResult;
}

function seoDesc() {
  let desc = document.getElementById("desc");

  let descResult = "Meta Description count is " + desc.length;
  //   console.log(titleResult.length);
  let resultDiv = document.getElementById("descResult");
  resultDiv.innerText = descResult;
}
