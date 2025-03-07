const overlay = document.getElementById("overlay");
const showOverlayBtn = document.getElementById("showOverlayBtn");
const closeOverlayBtn = document.getElementById("closeOverlayBtn");

showOverlayBtn.addEventListener("click", function () {
  overlay.style.display = "block";
});

closeOverlayBtn.addEventListener("click", function () {
  overlay.style.display = "none";
});
