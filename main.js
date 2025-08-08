// import Swiper JS
// import Swiper from 'swiper';

// import Swiper styles
// import 'swiper/swiper-bundle.min.css';

//  document.activeElement.blur();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// header fixed on scrolling
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.custom-nav');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

//changing icon on medium screen
const icon = document.querySelectorAll('i')[0];
const collapse = document.getElementById('navbarNavAltMarkup');
collapse.addEventListener('show.bs.collapse', () => {
    icon.classList.remove('bi-list');
    icon.classList.add('bi-x-lg');
});

collapse.addEventListener('hide.bs.collapse', () => {
    icon.classList.remove('bi-x-lg');
    icon.classList.add('bi-list');
});



//banner swiper

window.addEventListener('load', () => {
    const swiperBanner = new Swiper('.banner-swiper', {
        direction: 'vertical',
        loop: true, 
        slidesPerView: 1,
        autoplay: {
            delay: 3000,     
            disableOnInteraction: false, 
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    })
});


//testimonial sswiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,       // Number of cards visible at once
    spaceBetween: 30,       // Space between cards
    loop: true,             // Optional loop mode
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    }
});


//on button click
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    document.activeElement.blur();
  }

