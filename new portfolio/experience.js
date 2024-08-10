document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.fm-interview .slides');
    let index = 0;
    const totalSlides = slides.children.length;

    function showSlide(n) {
        if (n >= totalSlides) index = 0;
        else if (n < 0) index = totalSlides - 1;
        else index = n;

        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(() => {
        showSlide(index + 1);
    }, 3000);
