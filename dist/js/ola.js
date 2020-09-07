var script = document.createElement('script'); 
          
script.src =  "https://kit.fontawesome.com/965146de71.js"; 
  
document.head.appendChild(script) 
// Ola.js

jQuery(function () {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 140) {
            $(".navbar").addClass("nav-bg");
            $(".navbar").addClass("anima"); 
        } else {
        $(".navbar").removeClass("nav-bg");
        $(".navbar").addClass("anima");
        }
    });
});  
jQuery(function () {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 380) {
        $(".links-sociais").addClass("mostra-link");
        $(".links-sociais").addClass("anima");
        } else {
        $(".links-sociais").removeClass("mostra-link");
        $(".links-sociais").addClass("anima");
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
// document.getElementById("menu-servicos").innerHTML = 'Serviços <span class="caret"></span>';
document.getElementById("menu-equipe").innerHTML = 'Sobre nós';
// document.getElementById("menu-portfolio").innerHTML = 'Casos';
document.getElementById("menu-contato").innerHTML = 'Contato';
// document.getElementById("menu-fb").innerHTML = 'Blog';
// document.getElementById("menu-fb").setAttribute('href', 'http://blog.olaconecta.com');

// Links Sociais
const linksSociais = document.getElementById('linksSociais');
linksSociais.innerHTML = 
`
<ul>
  <li><a href="" target="_blank" id="menu-face"></a></li>
  <li><a href="" target="_blank" id="menu-insta"></a></li>
  <!-- <li><a href="" target="_blank" id="menu-tt"></a></li> -->
  <!-- <li><a href="" target="_blank" id="menu-in"></a></li> -->
</ul>
`

// MENU
document.getElementById("menu-face").innerHTML = '<i class="fab fa-facebook-square"></i>';
document.getElementById("menu-insta").innerHTML = '<i class="fab fa-instagram"></i>';
// document.getElementById("menu-tt").innerHTML = '<i class="fab fa-twitter"></i>';
// document.getElementById("menu-in").innerHTML = '<i class="fab fa-linkedin"></i>';

document.getElementById("menu-face").setAttribute('href', 'https://www.facebook.com/SeuContador.com.vc/');
document.getElementById("menu-insta").setAttribute('href', 'https://www.instagram.com/SeuContador.com.vc/');
// document.getElementById("menu-tt").setAttribute('href', 'https://www.twitter.com/OlaConecta/');
// document.getElementById("menu-in").setAttribute('href', 'https://www.linkedin.com/company/seucontador/');



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
    $('.digital').click(function() {
    scroll_to("#digital");
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

// FOOTER
const footerSite = document.getElementById('footer');
footerSite.innerHTML = 
`
<div class="container">
<div class="col-xs-6 col-md-3" id="contatos">
  <h5>Entre em contato:</h5>
  <h4><i class="fas fa-phone"></i> (11) 98956-9207</h4>
  <h4><i class="fas fa-envelope-open-text"></i> <a href="mailto:seucontador.com.vc@gmail.com?subject=Contato através do Site do SeuContador&body=SeuContador, você pode me ajudar?">Envie um e-mail</a></h4>
</div>
<div class="col-xs-6 col-md-3" id="redes-sociais">
  <h5>Siga o SeuContador nas redes sociais:</h5>            
  <a href="https://facebook.com/SeuContador.com.vc" target="_blank"><i class="fab fa-facebook-square"></i></a>
  <a href="https://instagram.com/SeuContador.com.vc" target="_blank"><i class="fab fa-instagram"></i></a>
  <a href="https://wa.me/5511989569207" target="_blank"><i class="fab fa-whatsapp"></i></a>
  <!-- <li><a href="" target="_blank" id="menu-tt"></a></li> -->
  <!-- <li><a href="" target="_blank" id="menu-in"></a></li> -->
  
</div>        
<div class="col-xs-12 col-md-6" id="endereco">
  <h5>Venha tomar um cafezinho conosco:</h5>  
  <h4><i class="fas fa-map-marker-alt"></i> <a href="https://goo.gl/maps/c1vcw46SiWG1ZzVC9"> R. Rui Pirozzelli, 47 - A  03811-020<br>Jd. Belém, São Paulo - SP</a></h4>
</div>
</div>
<div class="container copyright">
<hr>
<div class="col-xs-12 col-md-6">
  Copyright do SeuContador®. Todos os direitos reservados.
</div>        
<div class="col-xs-12 col-md-6 by-ola">
  <span class="pull-right">
    Site desenvolvido pela <a href="https://olaconecta.github.io" target="_blank">Olá!</a>
  </span>
</div>        
<!-- <div><img src="dist/img/empresario-cidade.png" class=""></div> -->
</div>
`
// /mobile/i.test(navigator.userAgent) && !location.hash && setTimeout(function() {
//   window.scrollTo(0, 1);
// }, 1000);​

