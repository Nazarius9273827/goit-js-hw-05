const images = document.querySelectorAll('.image');
const fullImageContainer = document.getElementById('fullImageContainer');
const fullImage = document.getElementById('fullImage');
let currentIndex = -1;

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        fullImage.src = img.src;
        fullImageContainer.style.display = 'flex';
        currentIndex = index;
    });
});

fullImageContainer.addEventListener('click', () => {
    fullImageContainer.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
    if (fullImageContainer.style.display === 'flex') {
        if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            fullImage.src = images[currentIndex].src;
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            fullImage.src = images[currentIndex].src;
        } else if (e.key === 'Escape') {
            fullImageContainer.style.display = 'none';
        }
    }
});