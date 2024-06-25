document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.color = "#f0e68c";
        });
        link.addEventListener("mouseout", function() {
            link.style.color = "#fff";
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
