document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".hero__button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Button clicked!");
    });
  });
});
// Simple slider functionality for testimonials
const testimonials = document.querySelector(".testimonials__slider");
testimonials.addEventListener("wheel", (event) => {
  event.preventDefault();
  testimonials.scrollLeft += event.deltaY;
});

function toggleMenu() {
  const menu = document.getElementById("header-menu");
  menu.classList.toggle("header__menu--visible");
}
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".testimonial");
  if (index >= slides.length) {
    currentSlide = 0;
  }
  if (index < 0) {
    currentSlide = slides.length - 1;
  }
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= document.querySelectorAll(".testimonial").length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = document.querySelectorAll(".testimonial").length - 1;
  }
  showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
