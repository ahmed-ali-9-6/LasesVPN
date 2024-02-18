document.addEventListener("DOMContentLoaded", function () {
  const testimonialsContainer = document.querySelector(".testimonials");
  const scrollBtnLeft = document.querySelector(".btn-left");
  const scrollBtnRight = document.querySelector(".btn-right");
  const dots = document.querySelectorAll(".dot");

  let currentIndex = 0;

  const scrollToIndex = (index) => {
    const scrollAmount = index * testimonialsContainer.clientWidth;
    testimonialsContainer.scroll({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const updateActiveDot = () => {
    dots.forEach((dot, index) => {
      dot.classList.toggle("dot-fill", index === currentIndex);
    });
  };

  scrollBtnLeft.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    updateActiveDot();
    scrollToIndex(currentIndex);
  });

  scrollBtnRight.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateActiveDot();
    scrollToIndex(currentIndex);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateActiveDot();
      scrollToIndex(currentIndex);
    });
  });
});
