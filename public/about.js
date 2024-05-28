document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll(".animated-element");
    // Add the 'visible' class to each element after a short delay
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, 500 + index * 200); // Delay to ensure the animation starts after the page load, staggered
    });

    var cards = document.querySelectorAll(".box");
    cards.forEach(function(card) {
        card.addEventListener("mouseenter", function() {
            card.style.backgroundColor = "#f0f8ff"; // Change to a light blue color
        });

        card.addEventListener("mouseleave", function() {
            card.style.backgroundColor = ""; // Reset to the original background color
        });

        card.addEventListener("click", function() {
            alert("You will be redirected to " + card.querySelector(".card-title").innerText + "'s Facebook Profile");
        });
    });
});

// Footer 
const images = document.querySelectorAll(".acc-img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        const card = img.nextElementSibling;
        const isExpanded = card.classList.contains("expand");
        const allCards = document.querySelectorAll(".card");

        allCards.forEach((element) => {
            if (element !== card) {
                element.classList.remove("expand");
                element.classList.add('small');
            }
        });
        if (isExpanded) {
            card.classList.remove("expand");
            card.classList.add("small");
        } else {
            card.classList.remove("small");
            card.classList.add('expand');
        }
    });
});