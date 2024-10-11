let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
let body = document.body;

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");

  if (navBar.classList.contains("active")) {
    // If navbar is active, show it from right to left
    navBar.style.right = "0";
    body.style.overflowY = "hidden"; // Disable vertical scrolling
  } else {
    // If navbar is not active, hide it back to the right
    navBar.style.right = "-100vw";
    body.style.overflowY = "auto"; // Enable vertical scrolling
  }
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
    navBar.style.right = "-100vw"; // Hide the navbar when a link is clicked
    body.style.overflowY = "auto"; // Enable vertical scrolling
  });
});





function makeCall() {
  window.location.href = "tel:8975798087";
}