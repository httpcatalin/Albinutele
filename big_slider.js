const bigSlider = document.querySelector('.big_slider');
const slides = document.querySelectorAll('.each_slider');


let currentSlideIndex = 0;


function showSlide(index) {

    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    
    slides[index].style.display = '';
}


function showNextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0; 
    }
    showSlide(currentSlideIndex);
}


function showPreviousSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1; 
    }
    showSlide(currentSlideIndex);
}


const prevButton = document.querySelector('.prev_big');
const nextButton = document.querySelector('.next_big');

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);


showSlide(currentSlideIndex);
