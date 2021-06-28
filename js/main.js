const cursor = document.querySelector('.cursor');
const cursor_hover = document.querySelector('.cursor_hover');
cursor.style.opacity = 0;
cursor_hover.style.opacity = 0;

$(window).on('load', function() {
const cursor_links = document.querySelectorAll('.cursor-links');

Array.from(cursor_links).forEach(function(link){
    link.addEventListener("mouseenter", function(e){
        cursor.style.opacity = 0;
        cursor_hover.style.opacity = 1;
    })
    link.addEventListener("mouseleave", function(e){
        cursor_hover.style.opacity = 0;
    })
});

document.addEventListener("mousemove", function(e){
    cursor.style.left = e.pageX - 40 + "px";
    cursor.style.top = e.clientY - 40 +"px";
    cursor.style.opacity = 1;
    cursor_hover.style.left = e.pageX - 11 + "px";
    cursor_hover.style.top = e.clientY - 46 + "px";
})

let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


// Owl-carousel
$('.site-main .about-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        560: {
            items: 2
        }
    }
})

if(window.innerWidth < 992) {
    document.getElementsByClassName('main-menu')[0].style.backgroundColor = "#fff";
}

const loader = document.querySelector("#preloader");
loader.style.left = "-100%";

let socialList = document.querySelectorAll(".social li");
let bg = document.querySelector(".contact-area");
socialList.forEach(el => {
    el.addEventListener("mouseenter", function (event) {
        let color = event.target.getAttribute("data-color");
        bg.style.backgroundColor = color;
    })

    el.addEventListener("mouseleave", function (event) {
        bg.style.backgroundColor = "#fff";
    })
})


})

window.onmouseout=function(event){ 
    if(event.toElement===null) {
        cursor.style.opacity = 0;
        cursor_hover.style.opacity = 0;
    } 
}

