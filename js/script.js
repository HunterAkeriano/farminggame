let burger = document.querySelector('.burger');
let burgerMeny = document.querySelector('.burger__content');
// переменная про которую я помню
let navUl = document.querySelector('.burger-ul');
// она вверху
let close = document.querySelector('.close');
let imgLink = document.querySelector('.burger-img');

function mobileMenu(){
    let nav = burger.classList.toggle('active');
     burgerMeny.classList.toggle('active');
     navUl.classList.toggle('active');
     imgLink.classList.toggle('active');
    let closeBodu = close.classList.toggle('active');
     if(nav){
         document.body.style.overflow = 'hidden';
     }

 };

 burger.addEventListener('click', mobileMenu);

 const navLink = document.querySelectorAll('.burger-link');

 function closeMenu(){
    burger.classList.remove('active');
    burgerMeny.classList.remove('active');
    navUl.classList.remove('active');
    // close.classList.remove('active');
    imgLink.classList.remove('active');
    if(true){
        document.body.style.overflow = 'auto';
    }
}
close.addEventListener('click', closeMenu);
navLink.forEach(n => n.addEventListener('click', closeMenu));



// swiper card

const swiper = new Swiper('.swiper1', {
    effect: 'cards',
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay:{
        delay: 1500,
      }
});

// swiper для Наших Постановок

const swiper2 = new Swiper('.swiper2', {
    centerSlides: 'true',
   fade: 'true',
   breakpoints: {
    320: {
        slidesPerView: 1,
    },
    992: {
        slidesPerView: 2,
    },
    1061: {
        slidesPerView: 4,
    },
}
})

// swiper для партёнров

const swiper3 = new Swiper('.swiper3', {
    centerSlides: 'true',
   fade: 'true',
   breakpoints: {
    320: {
        slidesPerView: 1,
    },
    552:{
        slidesPerView: 2
    },
    992: {
        slidesPerView: 2,
        loop: true,
    },
    1061: {
        slidesPerView: 4,
    }
}
});


const swiper4 = new Swiper('.swiper4', {
    centerSlides: 'true',
   fade: 'true',
   breakpoints: {
    320: {
        slidesPerView: 1,
    },
    552:{
        slidesPerView: 2
    },
    992: {
        slidesPerView: 2,
        loop: true,
    },
    1061: {
        slidesPerView: 4,
    }
}
})


