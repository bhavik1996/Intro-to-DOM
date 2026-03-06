let seoTitle = document.getElementById("seoTitle");
let seoDescription = document.getElementById("seoDescription");

seoTitle.addEventListener("input", checkTitle);
seoDescription.addEventListener("input", checkDescription);

function checkTitle() {
  let text = seoTitle.value;
  let status = document.getElementById("titleStatus");
  let preview = document.getElementById("previewTitle");

  preview.innerText = text.substring(0, 60);

  if (text.length < 50) {
    status.innerText = text.length + " - Title too Short";
    status.style.color = "red";
  } else if (text.length <= 60) {
    status.innerText = text.length + " - Optimal title length";
    status.style.color = "green";
  } else {
    status.innerText = text.length + " - Title too long";
    status.style.color = "orange";
  }
}

function checkDescription() {
  let text = seoDescription.value;
  let status = document.getElementById("descStatus");
  let preview = document.getElementById("previewDesc");

  preview.innerText = text.substring(0, 160);

  if (text.length < 120) {
    status.innerText = text.length + " - Description too Short";
    status.style.color = "red";
  } else if (text.length <= 160) {
    status.innerText = text.length + " - Optimal description length";
    status.style.color = "green";
  } else {
    status.innerText = text.length + " - Description too long";
    status.style.color = "orange";
  }
}
