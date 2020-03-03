/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



//const newCarousel = document.querySelector('.carousel-container');


function showSlides (n){
  var i;
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const lButton = document.createElement('div');
  lButton.classList.add('left-button');

  const img1 = document.createElement('img');
  img1.src = "./assets/carousel/mountains.jpeg";

  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');

  const rButton = document.createElement('div');
  rButton.classList.add('right-button');

  if (n > carousel.length) {slideIndex = 1}
  if (n < 1) {slideIndex = carousel.length}

  carousel.appendChild(lButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rButton);


  return carousel;

}
