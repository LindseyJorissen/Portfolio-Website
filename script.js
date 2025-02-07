const header = document.getElementById("header");
const aboutSection = document.getElementById("about");

window.addEventListener("scroll", function() {
  const aboutSectionPosition = aboutSection.getBoundingClientRect().top;

  if (aboutSectionPosition <= window.innerHeight * 0.1) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden"); 
  }
});
