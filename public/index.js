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