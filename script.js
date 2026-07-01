// Select the navigation bar
const navbar = document.getElementById("navbar");

// Change navbar style when scrolling
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});