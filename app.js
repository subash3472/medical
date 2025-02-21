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

// checking
// ..................................
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let slider = document.querySelector(".slider");
let sliderList = slider.querySelector(".slider .list");
let thumbnail = document.querySelector(".slider .thumbnail");
let thumbnailItems = thumbnail.querySelectorAll(".item");

thumbnail.appendChild(thumbnailItems[0]);

// Function for next button
nextBtn.onclick = function () {
  moveSlider("next");
};

// Function for prev button
prevBtn.onclick = function () {
  moveSlider("prev");
};

function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll(".item");
  let thumbnailItems = document.querySelectorAll(".thumbnail .item");

  if (direction === "next") {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev");
  }

  slider.addEventListener(
    "animationend",
    function () {
      if (direction === "next") {
        slider.classList.remove("next");
      } else {
        slider.classList.remove("prev");
      }
    },
    { once: true }
  );
}

// check
document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error fetching header content:", error));
});
