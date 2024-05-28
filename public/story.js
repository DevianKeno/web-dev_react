document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the animated-element class
    const animatedElements = document.querySelectorAll(".animated-element");
    // Add the 'visible' class to each element after a short delay
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, 500 + index * 200); // Delay to ensure the animation starts after the page load, staggered
    });

    // Video interaction
    const video = document.querySelector(".embed-responsive-item");
    video.addEventListener("play", function() {
        // Change background color when video is playing
        document.body.style.backgroundColor = "#f8bbd0";
    });
    video.addEventListener("pause", function() {
        // Revert background color when video is paused
        document.body.style.backgroundColor = "#ffecd2";
    });
    video.addEventListener("ended", function() {
        // Revert background color and show alert when video ends
        document.body.style.backgroundColor = "#ffecd2";
        alert("We hope you enjoyed our story!");
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