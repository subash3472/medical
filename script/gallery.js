const listitem = document.querySelectorAll("ul li");
const imgeitem = document.querySelectorAll(
  ".zxzxssss_gallery_js_container img"
);

listitem.forEach((li) => {
  li.onclick = function () {
    // Remove "active" class from all li elements
    listitem.forEach((li) => {
      li.classList.remove("active");
    });

    // Add "active" class to the clicked li element
    li.classList.add("active");
    // Filter images
    const value = li.textContent.trim().toLowerCase();
    imgeitem.forEach((img) => {
      img.style.display = "none";
      if (img.getAttribute("data-filter") === value || value === "all") {
        img.style.display = "block";
      }
    });
  };
});

// const listitem = document.querySelectorAll(".filter-list li");
// const imgeitem = document.querySelectorAll(
//   ".zxzxssss_gallery_js_container img"
// );

// listitem.forEach((li) => {
//   li.onclick = function () {
//     // Remove "active" class from all li elements
//     listitem.forEach((li) => {
//       li.classList.remove("active");
//     });

//     // Add "active" class to the clicked li element
//     li.classList.add("active");

//     // Filter images
//     const value = li.textContent.trim().toLowerCase();
//     imgeitem.forEach((img) => {
//       img.classList.add("hidden");
//       if (img.getAttribute("data-filter") === value || value === "all") {
//         img.classList.remove("hidden");
//       }
//     });
//   };
// });

// Set initial filter to show all images
document.querySelector(".filter-list li.active").click();
