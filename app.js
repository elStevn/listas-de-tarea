document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.image-slider .slides');
    const slides = document.querySelectorAll('.image-slider .slides img');
    let index = 0;
  
    function showNextSlide() {
      index = (index + 1) % slides.length; // Deslizar las imágenes de forma cíclica
      sliderContainer.style.transform = `translateX(-${index * 100}%)`;
    }
  
    // Ejecutar el cambio automático cada 3 segundos
    setInterval(showNextSlide, 3000);
  });
  