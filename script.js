// JavaScript
let carousel = document.querySelector('.carousel');
let carouselItems = document.querySelectorAll('.carousel-item');
let pagination = document.querySelector('.carousel-pagination');
let paginationArrows = document.querySelectorAll('.pagination-arrow');

let currentSlide = 0;

carouselItems.forEach((item, index) => {
  item.style.transform = `translateX(${index * 100}%)`;
});

paginationArrows.forEach((arrow, index) => {
  arrow.addEventListener('click', () => {
    if (index === 0) {
      if (currentSlide > 0) {
        currentSlide--;
      }
    } else {
      if (currentSlide < carouselItems.length - 1) {
        currentSlide++;
      }
    }
    carouselItems.forEach((item, index) => {
      item.style.transform = `translateX(${index * 100}%)`;
    });
  });
});

// JavaScript for enabling carousel functionality
const slides = document.querySelectorAll(".carousel-slide img");
const dots = document.querySelectorAll(".dot");

// Function to handle slide changes
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

// Event listeners for pagination dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});

// Example: Automatically advance the carousel every 3 seconds
let currentIndex = 0;
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 3000); // Change the interval as desired


// Home Slider
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const inner = slider.querySelector('.slider-inner');
  const items = slider.querySelectorAll('.slider-item');
  const prevButton = slider.querySelector('.slider-control-prev');
  const nextButton = slider.querySelector('.slider-control-next');
  const indicators = slider.querySelectorAll('.slider-indicators button');

  let currentIndex = 0;

  function showSlide(index) {
    if (index >= items.length) {
      index = 0;
    } else if (index < 0) {
      index = items.length - 1;
    }
    inner.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;

    indicators.forEach((button, i) => {
      button.classList.toggle('active', i === index);
    });
  }

  prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  indicators.forEach((button, index) => {
    button.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // Auto slide
  // setInterval(() => {
  //   showSlide(currentIndex + 1);
  // }, 15000); // Change slide every 5 seconds
});
