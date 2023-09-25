
  const testimonials = document.querySelectorAll(".testimonial");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      if (i === index) {
        testimonial.style.display = "block";
      } else {
        testimonial.style.display = "none";
      }
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  showTestimonial(currentIndex);

  document.getElementById("prevBtn").addEventListener("click", prevTestimonial);
  document.getElementById("nextBtn").addEventListener("click", nextTestimonial);



  $(document).ready(function () {
    // Inicializar el carrusel
    $(".testimonial-carousel").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false, // Desactivar la reproducción automática
      dots: true,
      arrows: true, // Mostrar flechas de navegación
    });

    // Agregar eventos a los botones de navegación personalizados
    $("#prevBtn").click(function () {
      $(".testimonial-carousel").slick("slickPrev"); // Retroceder al testimonio anterior
    });

    $("#nextBtn").click(function () {
      $(".testimonial-carousel").slick("slickNext"); // Avanzar al siguiente testimonio
    });
  });

