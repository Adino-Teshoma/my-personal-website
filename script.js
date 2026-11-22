
// ========================================
// ADINO TESHOMA PORTFOLIO
// JAVASCRIPT
// ========================================


// STEP 1: SELECT HTML ELEMENTS

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");
const backToTop = document.querySelector("#back-to-top");
const typingElement = document.querySelector("#typing");


// STEP 2: MOBILE NAVIGATION

if (menuIcon && navbar) {

    // Open and close menu
    menuIcon.addEventListener("click", () => {

        navbar.classList.toggle("active");
        menuIcon.classList.toggle("bx-x");
        menuIcon.classList.toggle("bx-menu");

    });

    // Close menu after clicking a link
    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");
            menuIcon.classList.remove("bx-x");
            menuIcon.classList.add("bx-menu");

        });

    });

    // Close menu when clicking outside
    document.addEventListener("click", event => {

        const clickedOutside =
            !navbar.contains(event.target) &&
            !menuIcon.contains(event.target);

        if (clickedOutside) {

            navbar.classList.remove("active");
            menuIcon.classList.remove("bx-x");
            menuIcon.classList.add("bx-menu");

        }

    });

    // Close menu with Escape key
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            navbar.classList.remove("active");
            menuIcon.classList.remove("bx-x");
            menuIcon.classList.add("bx-menu");

        }

    });

}


// STEP 3: TYPING ANIMATION

if (typingElement) {

    const words = [
        "Frontend Developer",
        "Computer Science Student",
        "Programmer",
        "Web Developer"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (deleting) {

            letterIndex--;

        } else {

            letterIndex++;

        }

        typingElement.textContent =
            currentWord.substring(0, letterIndex);

        let speed = deleting ? 60 : 110;

        // Wait before deleting a complete word
        if (!deleting && letterIndex === currentWord.length) {

            deleting = true;
            speed = 1200;

        }

        // Move to the next word
        else if (deleting && letterIndex === 0) {

            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 400;

        }

        setTimeout(typeEffect, speed);

    }

    typeEffect();

}


// STEP 4: SCROLL REVEAL

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("show");

    });

}


// STEP 5: ACTIVE NAVIGATION

const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


// STEP 6: BACK TO TOP BUTTON

function handleScroll() {

    // Show button after scrolling
    if (backToTop) {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    // Update active navigation
    updateActiveLink();

}


// Listen for page scrolling
window.addEventListener("scroll", handleScroll);


// STEP 7: AUTOMATIC COPYRIGHT YEAR

const yearElement = document.querySelector("#year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// STEP 8: INITIAL PAGE CHECK

handleScroll();
