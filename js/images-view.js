const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {

    const images = carousel.dataset.images.split(',');

    let currentIndex = 0;

    const imageElement = document.createElement('img');
    imageElement.className = 'carousel-image';
    imageElement.src = images[currentIndex];

    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-arrow prev';
    prevButton.textContent = '‹';

    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-arrow next';
    nextButton.textContent = '›';

    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';

    const dots = [];

    images.forEach((image, index) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';

        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });

        dots.push(dot);
        dotsContainer.appendChild(dot);
    });

    function updateCarousel() {
        imageElement.src = images[currentIndex];

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    carousel.appendChild(prevButton);
    carousel.appendChild(imageElement);
    carousel.appendChild(nextButton);
    carousel.appendChild(dotsContainer);

    updateCarousel();
});