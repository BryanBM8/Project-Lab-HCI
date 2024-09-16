const sliderImages = document.querySelectorAll('.slider img');
const totalImages = sliderImages.length;
let currentIndex = 0;

function changeImage() {
  sliderImages[currentIndex].style.display = 'none';

  currentIndex = (currentIndex + 1) % totalImages;

  sliderImages[currentIndex].style.display = 'block';
}


setInterval(changeImage, 2000); 


document.querySelector('#hamburger').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});