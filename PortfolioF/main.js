const backToTopBtn = document.querySelector("#backToTopBtn");
window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopBtn.computedStyleMap.display = "block";
  } else {
    backToTopBtn.computedStyleMap.display = "none";
  }
};
const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

backToTopBtn.addEventListener("click", backToTop);

// Get the overlay and buttons
const overlay = document.getElementById("overlay");
const showOverlayBtn = document.getElementById("showOverlayBtn");
const closeOverlayBtn = document.getElementById("closeOverlayBtn");

// Show the overlay
showOverlayBtn.addEventListener("click", function () {
  overlay.style.display = "block"; // Show the overlay
});

// Close the overlay
closeOverlayBtn.addEventListener("click", function () {
  overlay.style.display = "none"; // Hide the overlay
});
