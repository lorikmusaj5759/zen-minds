// Filename: AdvancedImageGallery.js

// Constants
const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 400;

// Global Variables
let currentImage = 0;
let images = [];

// Function to load images 
function loadImages() {
  fetch('https://api.unsplash.com/photos/random?count=10&client_id=YOUR_CLIENT_ID')
    .then(response => response.json())
    .then(data => {
      images = data.map(image => {
        return {
          id: image.id,
          url: image.urls.regular
        };
      });
      displayImage(currentImage);
    })
    .catch(error => console.log(error));
}

// Function to switch to the next image
function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  displayImage(currentImage);
}

// Function to switch to the previous image
function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  displayImage(currentImage);
}

// Function to display the image specified by the given index
function displayImage(index) {
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = '';

  const img = document.createElement('img');
  img.src = images[index].url;
  img.width = IMAGE_WIDTH;
  img.height = IMAGE_HEIGHT;
  imageContainer.appendChild(img);
}

// Add event listeners to the next and previous buttons
document.getElementById('nextButton').addEventListener('click', nextImage);
document.getElementById('prevButton').addEventListener('click', prevImage);

// Load images when the page finishes loading
window.addEventListener('load', loadImages);