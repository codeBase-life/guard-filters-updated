// const slidesContainer = document.querySelector(".slides");
// const dots = document.querySelectorAll(".dot");
// const totalSlides = document.querySelectorAll(".slide").length;
// let currentIndex = 0;

// function goToSlide(index) {
//   if (index < 0) {
//     index = totalSlides - 1;
//   } else if (index >= totalSlides) {
//     index = 0;
//   }

//   slidesContainer.style.transform = "translateY(" + -index * 100 + "%)";
//   currentIndex = index;
//   updateDots();
// }

// function updateDots() {
//   dots.forEach((dot) => dot.classList.remove("active"));
//   dots[currentIndex].classList.add("active");
// }

// dots.forEach((dot) => {
//   dot.addEventListener("click", (e) => {
//     const index = parseInt(e.target.getAttribute("data-index"));
//     goToSlide(index);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const carousel = document.querySelector("#carouselExampleIndicators");
//   const indicators = document.querySelectorAll(".carousel-indicators button");

//   carousel.addEventListener("slide.bs.carousel", function (event) {
//     indicators.forEach((indicator, index) => {
//       if (index === event.to) {
//         indicator.classList.add("custom-btn");
//       } else {
//         indicator.classList.remove("custom-btn");
//       }
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const carousel = document.getElementById("carouselExampleIndicators");
//   const indicators = carousel.querySelectorAll(".carousel-indicators button");

//   function updateIndicators() {
//     indicators.forEach(function (btn) {
//       if (btn.classList.contains("active")) {
//         btn.classList.remove("circle-btn");
//         btn.classList.add("custom-btn");
//       } else {
//         btn.classList.remove("custom-btn");
//         btn.classList.add("circle-btn");
//       }
//     });
//   }

//   updateIndicators();

//   carousel.addEventListener("slid.bs.carousel", function () {
//     updateIndicators();
//   });
// });

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
  pagination: false,
  gap: "1rem",
  breakpoints: {
    768: {
      perPage: 1,
    },
  },
});

splide.mount();
