// ========================================
// CODE SPHERE - MAIN JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // TYPING EFFECT
    // ========================================

    const typingText = document.getElementById("typing-text");

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

    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (!isDeleting) {

            typingText.textContent =
                currentRole.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentRole.length) {

                isDeleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typingText.textContent =
                currentRole.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                isDeleting = false;

                roleIndex++;

                if (roleIndex === roles.length) {
                    roleIndex = 0;
                }
            }
        }

        setTimeout(
            typeEffect,
            isDeleting ? 50 : 90
        );
    }


    // Start typing
    if (typingText) {
        typeEffect();
    }


    // ========================================
    // TESTIMONIAL CAROUSEL
    // ========================================

    if (
        typeof $ !== "undefined" &&
        $(".testimonial-carousel").length
    ) {

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

    }

});