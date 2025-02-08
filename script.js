const toggleSwitch = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
  }
});

window.addEventListener("scroll", function () {
  let bigNameSection = document.querySelector(".home-content h1");
  let logo = document.querySelector(".logo");

  if (bigNameSection.getBoundingClientRect().bottom < 0) {
      logo.classList.add("visible");
  } else {
      logo.classList.remove("visible");
  }
});
