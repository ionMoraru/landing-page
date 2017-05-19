let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;

  const slides = document.getElementsByClassName('mySlides');
  const textSlide = document.getElementsByClassName('text-slide');
  const dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < textSlide.length; i++) {
    textSlide[i].style.display = "none";
  }
  for (i = 0; i <dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  textSlide[slideIndex - 1].style.display = "block";
  dots[slideIndex-1].className += " active";

}
