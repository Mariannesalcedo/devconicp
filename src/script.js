// Carousel functionality
const images = ['hotel1.jpg', 'hotel2.jpg', 'hotel3.jpg']; // Add your image file names here
let currentIndex = 0;

document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

function updateCarousel() {
    document.getElementById('carouselImage').src = images[currentIndex];
}

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Display a confirmation message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    
    // Clear the form fields
    document.getElementById('contactForm').reset();
});
