document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    // Navigation Links Hover Effect
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffc107"; // Change color on hover
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "#f8f9fa"; // Revert color on mouseout
        });
    });

    // Project Cards Hover Effect
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)"; // Zoom in on hover
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)"; // Reset zoom on mouseout
        });
    });

    // Scroll to Top Button
    const moveUpButton = document.querySelector(".move-up");
    if (moveUpButton) {
        moveUpButton.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            window.scrollTo({
                top: 0,
                behavior: "smooth", // Smooth scrolling
            });
        });
    }

    // Smooth Scrolling for Navigation Links
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href").substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({
                    behavior: "smooth", // Smooth scrolling
                    block: "start",
                });
            }
        });
    });
});
