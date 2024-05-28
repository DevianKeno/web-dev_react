document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the animated-element class
    const animatedElements = document.querySelectorAll(".animated-element");
    // Add the 'visible' class to each element after a short delay
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, 500 + index * 200); // Delay to ensure the animation starts after the page load, staggered
    });
    
    showSlides();
    // slides.forEach((slide) => {
    //     slide.addEventListener('click', () => {
    //         toggleInfo();
    //     });
    // });
});

let slideIndex = 0;
const slides = document.querySelectorAll('.mySlides');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

// function toggleInfo() {
//     const slide = slides[slideIndex];
//     const info = slide.querySelector('.info');
//     info.style.display = (info.style.display === "none" || info.style.display === "") ? "block" : "none";
// }

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}
