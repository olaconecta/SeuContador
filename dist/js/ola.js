// Ola.js

jQuery(function () {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 280) {
        $(".navbar").addClass("nav-bg");
        } else {
        $(".navbar").removeClass("nav-bg");
        $(".navbar").addClass("anima");
        }
    });
});  

// clique fora do hamburguer para fechar menu
jQuery('body').bind('click', function(e) {
    if(jQuery(e.target).closest('.navbar').length == 0) {
        // click happened outside of .navbar, so hide
        var opened = jQuery('.navbar-collapse').hasClass('collapse in');
        if ( opened === true ) {
            jQuery('.navbar-collapse').collapse('hide');
        }
    }
});


// MENU
document.getElementById("ola").innerHTML = 'Início';
document.getElementById("menu-servicos").innerHTML = 'Serviços';
document.getElementById("menu-equipe").innerHTML = 'Sobre nós';
document.getElementById("menu-portfolio").innerHTML = 'Casos';
document.getElementById("menu-contato").innerHTML = 'Contato';
document.getElementById("menu-fb").innerHTML = 'Blog';
document.getElementById("menu-fb").setAttribute('href', 'http://blog.olaconecta.com');



// MENU
// document.getElementById("menu-face").innerHTML = '<i class="fab fa-facebook-square"></i>';
document.getElementById("menu-insta").innerHTML = '<i class="fab fa-instagram"></i>';
// document.getElementById("menu-tt").innerHTML = '<i class="fab fa-twitter"></i>';
document.getElementById("menu-in").innerHTML = '<i class="fab fa-linkedin"></i>';

// document.getElementById("menu-face").setAttribute('href', 'https://www.facebook.com/OlaConecta/');
document.getElementById("menu-insta").setAttribute('href', 'https://www.instagram.com/SeuContador.com.vc/');
// document.getElementById("menu-tt").setAttribute('href', 'https://www.twitter.com/OlaConecta/');
document.getElementById("menu-in").setAttribute('href', 'https://www.linkedin.com/company/seucontador/');

// Scroll
$(document).ready(function() {    
    $('.ola').click(function() {
    scroll_to("#home");
    });
    $('.redes').click(function() {
    scroll_to("#redes");
    });
    $('.conteudo').click(function() {
    scroll_to("#conteudo");
    });
    $('.sites').click(function() {
    scroll_to("#sites");
    });
    $('#btn-call-content').click(function() {
    scroll_to("#form");
    });
    $('.content-1').click(function() {
    scroll_to("#content-1");
    });
    $('.content-2').click(function() {
    scroll_to("#content-2");
    });
    $('.content-3').click(function() {
    scroll_to("#content-3");
    });
    $('.content-form').click(function() {
    scroll_to("#form");
    });
    // eduardolevi
    $('.slide1').click(function() {
        scroll_to("#slide2");
    });
    $('.slide2').click(function() {
        scroll_to("#slide1");
    });

    function scroll_to(div){
    $('html, body').animate({
    scrollTop: $(div).offset().top
    },1700);
    }       
    $('body').scrollspy({ target: '#navbar' })
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });         
}); 

// /mobile/i.test(navigator.userAgent) && !location.hash && setTimeout(function() {
//   window.scrollTo(0, 1);
// }, 1000);​

