// Get the button
const backToTopButton = document.getElementById("backToTopBtn");

// Show the button after scrolling down 20px
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

// When the user clicks the button, scroll to the top
backToTopButton.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Get references to the button and the body
const themeToggleButton = document.getElementById("theme-toggle-btn");
const body = document.body;

// Check if the theme preference is stored in localStorage
const storedTheme = localStorage.getItem("theme");

// If a theme is stored, apply it
if (storedTheme) {
  body.setAttribute("data-theme", storedTheme);
  // Update the button text accordingly
  themeToggleButton.textContent =
    storedTheme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme";
}

// Add event listener for the button to toggle themes
themeToggleButton.addEventListener("click", function () {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Switch theme
  body.setAttribute("data-theme", newTheme);

  // Save the current theme in localStorage
  localStorage.setItem("theme", newTheme);

  // Update button text
  themeToggleButton.textContent =
    newTheme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme";
});
