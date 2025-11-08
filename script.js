// Seleciona todos os carrosséis na página
const carousels = document.querySelectorAll('.carousel');

// Para cada carrossel, adiciona funcionalidade nas setas
carousels.forEach(carousel => {
  const container = carousel.querySelector('.carousel-container');
  const btnPrev = carousel.querySelector('.btn-prev');
  const btnNext = carousel.querySelector('.btn-next');

  const scrollAmount = 300; // Pixels para mover em cada clique

  btnPrev.addEventListener('click', () => {
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  btnNext.addEventListener('click', () => {
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});
