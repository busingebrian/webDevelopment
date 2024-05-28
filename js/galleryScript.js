let currentIndex = 0;
let images = [];
let captions = [];

function openLightbox(imageSrc, caption) {
  document.getElementById('lightbox-image').src = imageSrc;
  document.getElementById('caption').innerHTML = caption;
  document.getElementById('lightbox').style.display = 'block';
  currentIndex = images.indexOf(imageSrc);
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function navigate(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  document.getElementById('lightbox-image').src = images[currentIndex];
  document.getElementById('caption').innerHTML = captions[currentIndex];
}

// Populate images and captions arrays
document.querySelectorAll('.gallery-item').forEach(item => {
  images.push(item.querySelector('img').src);
  captions.push(item.querySelector('img').alt);
});
