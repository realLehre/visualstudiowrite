const menuBtn = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.header');
const header = document.querySelector('.header-container');
const body = document.querySelector('body');
const showDownloads = document.querySelector('.btn-3');

menuBtn.addEventListener('click', function(){
    navBar.classList.toggle('open');    
});

window.addEventListener('scroll', function(){
    if(document.documentElement.scrollTop > 0){
        header.style.boxShadow = '0.05px 0.5px 5px';
    } else {
         header.style.boxShadow = 'none';
    }
})

showDownloads.addEventListener('click', function(e){
    showDownloads.style.border = '1px solid white';
    document.querySelector('.download-table').classList.toggle('open-table');
    e.preventDefault();
})

$('.testimonials').owlCarousel({
    loop:true,
    margin:0,
    slideBy: 3,
    nav:true,
    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }

    
})

window.sr = ScrollReveal();

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '250px',
    delay: 300
});

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '250px',
    delay: 200
});
