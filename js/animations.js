document.addEventListener("DOMContentLoaded", () => {

    // --------------------------------
    // Elements to Animate
    // --------------------------------

    const animatedElements = document.querySelectorAll(
        `
        .section-heading,
        .about-text,
        .about-stats,
        .skill-card,
        .project-card,
        .education-card,
        .achievement-card,
        .interest-card,
        .contact-content,
        .footer-content
        `
    );


    // --------------------------------
    // Add Reveal Class
    // --------------------------------

    animatedElements.forEach(element => {
        element.classList.add("reveal");
    });


    // --------------------------------
    // Intersection Observer
    // --------------------------------

    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };


    const revealObserver =
        new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    // Animate only once
                    observer.unobserve(entry.target);
                }

            });

        }, observerOptions);


    // Observe every animated element
    animatedElements.forEach(element => {
        revealObserver.observe(element);
    });


    // --------------------------------
    // Stagger Animation for Skill Cards
    // --------------------------------

    const skillCards =
        document.querySelectorAll(".skill-card");

    skillCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.08}s`;

    });


    // --------------------------------
    // Stagger Animation for Interests
    // --------------------------------

    const interestCards =
        document.querySelectorAll(".interest-card");

    interestCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.1}s`;

    });


    // --------------------------------
    // Reduced Motion Accessibility
    // --------------------------------

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (prefersReducedMotion) {

        animatedElements.forEach(element => {
            element.classList.add("active");
            element.style.transitionDelay = "0s";
        });

    }

});