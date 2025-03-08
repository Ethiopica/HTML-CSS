// Get the overlay and buttons
const overlay = document.getElementById("overlay");
const showOverlayBtn = document.getElementById("show-overlay-btn");
const closeOverlayBtn = document.getElementById("close-overlay-btn");

// Show the overlay when the button is clicked
showOverlayBtn.addEventListener("click", function () {
  overlay.style.display = "flex";
});

// Hide the overlay when the close button is clicked
closeOverlayBtn.addEventListener("click", function () {
  overlay.style.display = "none";
});
