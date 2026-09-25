// ================================
// Dynamic Hero Role - Typing Effect
// ================================

const roles = [
    "Java Developer",
    "Full Stack Developer",
    "Backend Developer",
    "Spring Boot Developer",
    "Frontend Developer",
    "SQL Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const dynamicRole = document.getElementById("dynamic-role");

function typeRole() {

    const currentRole = roles[roleIndex];

    // Typing
    if (!isDeleting) {

        dynamicRole.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        // Word complete
        if (charIndex === currentRole.length) {

            isDeleting = true;

            // Wait before deleting
            setTimeout(typeRole, 1500);
            return;
        }

    }

    // Deleting
    else {

        dynamicRole.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        // Word completely deleted
        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    // Typing speed / deleting speed
    setTimeout(typeRole, isDeleting ? 100 : 150);
}

typeRole();

$(document).ready(function () {

    $(".testimonial-carousel").owlCarousel({

        items: 1,

        loop: true,

        margin: 20,

        autoplay: true,

        autoplayTimeout: 3000,

        autoplaySpeed: 1000,

        smartSpeed: 1000,

        autoplayHoverPause: false,

        dots: true,

        nav: false,

        responsive: {

            0: {
                items: 1
            },

            768: {
                items: 1
            },

            992: {
                items: 1
            }

        }

    });

});