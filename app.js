// for remove 1st header
let removeButton = document.querySelector(".btn.btn-danger");
let removediv = document.querySelector(".main_smarteye_container");
let navbar = document.querySelector(".navbar_main_medical");

removeButton.addEventListener("click", function () {
  removediv.style.display = "none";
  navbar.style.top = "0px";
});

// alert
let buyNowButton = document.querySelector(".btn-success");
let freedoenloadButton = document.querySelector(".btn-primary");

buyNowButton.addEventListener("click", showalert);
freedoenloadButton.addEventListener("click", showalert);

function showalert() {
  alert("#wip");
}
