const slides = [
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920',
    title: 'Conecte-se com o melhor da internet em Gameleiras!',
    subtitle: 'Fibra óptica de alta velocidade para sua casa ou empresa'
  },
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920',
    title: 'Tecnologia de ponta para você',
    subtitle: 'Navegue sem limites com nossa internet de alta performance'
  },
  {
    image: 'https://images.unsplash.com/photo-1551636898-47668aa61de2?auto=format&fit=crop&q=80&w=1920',
    title: 'Suporte técnico 24hrs',
    subtitle: 'Estamos sempre prontos para te atender'
  }
];

let currentSlide = 0;
const carouselItems = document.querySelector('.carousel-items');

function createSlides() {
  slides.forEach((slide, index) => {
    const slideElement = document.createElement('div');
    slideElement.className = 'carousel-item';
    slideElement.style.backgroundImage = `url(${slide.image})`;
    
    const content = document.createElement('div');
    content.className = 'carousel-content';
    content.innerHTML = `
      <div class="carousel-text">
        <h1>${slide.title}</h1>
        <p>${slide.subtitle}</p>
        <div class="carousel-buttons">
          <a href="#planos" class="contact-button">Ver Planos</a>
          <a href="https://wa.me/553899999999" class="contact-button" style="background: transparent; border: 2px solid white;">
            Fale Conosco
          </a>
        </div>
      </div>
    `;
    
    slideElement.appendChild(content);
    carouselItems.appendChild(slideElement);
  });
}

function updateSlides() {
  carouselItems.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
}

createSlides();

setInterval(nextSlide, 5000);