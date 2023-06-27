
AOS.init();
$(document).ready(function(){
    $("#main-owl").owlCarousel({
        items:1,
        dots:true,
        margin:30,
        nav:true,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        loop:true,
        center:false,
        autoplay:true,
        autoplayTimeout:2000,
    });
    $('.bars').click(function(){
        $('.menu').toggleClass('akash')
    });
    $('.three-bar').click(function(){
        $('.X-bar').show();
        $('.three-bar').hide();
    });
    $('.X-bar').click(function(){
        $('.three-bar').show();
        $('.X-bar').hide();
    });
    $('.menu ul li').click(function(){
        $(this).find('ul').toggle();
        $(this).find('.down').toggle();
        $(this).find('.up').toggle();
    });
    $('.menu ul li ul li').click(function(){
        $(this).find('ul').toggle();
        $(this).find('.down2').toggle();
        $(this).find('.up2').toggle();
    });
    $(window).load(function(){
        setTimeout(function(){
            $('.loader').hide();
        },2000);
    });
});

