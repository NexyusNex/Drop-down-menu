function MenuFunctionality() {
  const dropMenu = document.querySelectorAll(".drop-down-menu");
  dropMenu.forEach((menu) => {
    const selected = menu.querySelector(".selected");
    const menuList = menu.querySelector(".menu-list");
    const icon = selected.querySelector(".selected-icon");
    selected.addEventListener("click", function (e) {
      e.preventDefault();
      if (menuList.style.visibility != "visible") {
        menuList.style.visibility = "visible";
        menuList.classList.add("animated");
        icon.style.transform = "rotate(0)";
      } else {
        menuList.style.visibility = "hidden";
        menuList.classList.remove("animated");
        icon.style.transform = "rotate(180deg)";
      }
    });

    const options = menuList.querySelectorAll(".option");
    options.forEach((option) => {
      option.addEventListener("click", function (e) {
        e.stopPropagation();
        menu.querySelector(".selected-text").textContent = option.textContent;
        menuList.style.visibility = "hidden";
        menuList.classList.remove("animated");
        icon.style.transform = "rotate(180deg)";
      });
    });
  });
}

MenuFunctionality();
