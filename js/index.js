let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function currentPhoto(n) {
  showSlides(slideIndex = n + 1);
}
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const textSlide = document.getElementsByClassName('text-slide');
  const dots = document.getElementsByClassName('dot');

  if (n > slides.length) {slideIndex = 1}
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
  textSlide[slideIndex - 1].className += " text-slide-animation";
  dots[slideIndex-1].className += " active";
}

const windowWidth = window.innerWidth;
if(windowWidth<800) {
  let slideTextIndex = 0;
  showTextSlides();

  function showTextSlides() {
    let i;
    const textSlide = document.getElementsByClassName('text-slide');
    for (i = 0; i < textSlide.length; i++) {
      textSlide[i].style.display = "none";
    }
    slideTextIndex++;
    if (slideTextIndex > textSlide.length) {slideTextIndex = 1}
    textSlide[slideTextIndex - 1].style.display = "block";
    textSlide[slideIndex - 1].className += " text-slide-animation";
    setTimeout(showTextSlides, 10000)
  }
}
