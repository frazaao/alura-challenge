const carousel = document.querySelector('ul.carousel-container');
const previousButton = document.querySelector('button.previous');
const nextButton = document.querySelector('button.next');

previousButton.addEventListener('click',() => {
    let scroll = carousel.scrollLeft;
    carousel.scroll((scroll - (carousel.clientWidth / 2)), 0)
})

nextButton.addEventListener('click',() => {
    let scroll = carousel.scrollLeft;
    carousel.scroll((scroll + (carousel.clientWidth / 2)), 0)
})