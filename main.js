/*Abre e fecha o menu quando clicar no ícone*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*Quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*Mudar o header da pagina quando der scroll*/
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    //SE scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //SENÃO, ou seja, menor que a altura do header
    header.classList.remove('scroll')
  }
}


/*Testimonials carousel slider swiper*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*scrollreveal: mostrar elementos quando der scroll na pagina*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#section .logo-alt,
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #certificates header, #certificates .certificates,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/*back-to-top*/
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo coforme a seção visivel na página*/
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

// parallax
window.addEventListener('scroll', function () {
  const parallaxLayer = document.querySelector('.parallax-layer');
  const scrollPosition = window.scrollY;

  // Ajuste a velocidade de rolagem conforme necessário
  const speed = 0.5;
  parallaxLayer.style.transform = `translateY(${scrollPosition * speed}px)`;
});