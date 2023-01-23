const selected = document.querySelector(".selected");
selected.addEventListener("click", function (e) {
  e.preventDefault();
  const menuList = document.querySelector(".menu-list");
  if (menuList.style.visibility != "visible") {
    menuList.style.visibility = "visible";
    menuList.classList.add("animated");
  } else {
    menuList.style.visibility = "hidden";
    menuList.classList.remove("animated");
  }
});

const options = document.querySelectorAll(".option");
options.forEach((option) => {
  option.addEventListener("click", function (e) {
    e.stopPropagation();
    document.querySelector(".selected-text").textContent = option.textContent;
  });
});
