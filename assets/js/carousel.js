const track = document.querySelector('#profile-image-carousel .carousel-track');
const dotsContainer = document.querySelector('#profile-image-carousel .carousel-dots');
const prevBtn = document.querySelector('#profile-image-carousel .prev');
const nextBtn = document.querySelector('#profile-image-carousel .next');

const images = Array.from(track.querySelectorAll('img'));
let current = 0;
let autoTimer;

// Build dot indicators dynamically from however many images are present
images.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
});

const dots = Array.from(dotsContainer.querySelectorAll('.carousel-dot'));

function goTo(index) {
    images[current].classList.remove('active');
    dots[current].classList.remove('active');

    current = (index + images.length) % images.length;

    images[current].classList.add('active');
    dots[current].classList.add('active');

    resetTimer();
}

function resetTimer() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 4000);
}

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

// Initialise
images[0].classList.add('active');
resetTimer();
