
// Select the menu icon
const menuIcon = document.querySelector("#menu-icon");

// Select the navigation menu
const navbar = document.querySelector(".navbar");

// Open and close the mobile menu
menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuIcon.classList.toggle("bx-x");

});

// Close menu after clicking a navigation link
navbar.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuIcon.classList.remove("bx-x");

    });

});
