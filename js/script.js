document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // CURRENT YEAR
    // ==========================================

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // ==========================================
    // ACTIVE NAVIGATION LINK
    // ==========================================

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(
        '.navbar nav a[href^="#"]'
    );

    const setActiveLink = () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const linkTarget =
                link.getAttribute("href");

            if (
                linkTarget === `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });
    };

    window.addEventListener("scroll", setActiveLink);

    setActiveLink();


    // ==========================================
    // IMAGE ERROR HANDLING
    // ==========================================

    const images =
        document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("error", () => {

            image.classList.add("image-error");

            console.warn(
                `Image could not be loaded: ${image.src}`
            );

        });

    });


    // ==========================================
    // EXTERNAL LINKS
    // ==========================================

    const externalLinks =
        document.querySelectorAll(
            'a[href^="http"]'
        );

    externalLinks.forEach(link => {

        link.setAttribute(
            "target",
            "_blank"
        );

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    // ==========================================
    // CONTACT EMAIL
    // ==========================================

    const emailLinks =
        document.querySelectorAll(
            'a[href^="mailto:"]'
        );

    emailLinks.forEach(link => {

        link.addEventListener("click", () => {

            console.log(
                "Opening email application..."
            );

        });

    });


    // ==========================================
    // PREVENT BROKEN HASH LINKS
    // ==========================================

    const hashLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    hashLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                targetId !== "#" &&
                !document.querySelector(targetId)
            ) {
                event.preventDefault();

                console.warn(
                    `Section ${targetId} does not exist.`
                );
            }

        });

    });


    // ==========================================
    // PAGE LOAD
    // ==========================================

    document.body.classList.add("page-loaded");

});
