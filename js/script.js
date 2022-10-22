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

const swiper = new Swiper('.swiper', {
    effect: 'cards',
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})


