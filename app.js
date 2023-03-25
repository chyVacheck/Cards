const CLASS = {
  ACTIVE: "slide_active",
};

const slides = document.querySelectorAll(".slide");

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove(CLASS.ACTIVE);
  });
}

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add(CLASS.ACTIVE);
  });
});
