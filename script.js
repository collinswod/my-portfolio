document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.color = "#ffc107";
        });
        link.addEventListener("mouseout", function() {
            link.style.color = "#f8f9fa";
        });
    });

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("mouseover", function() {
            card.style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseout", function() {
            card.style.transform = "scale(1)";
        });
    });
});
