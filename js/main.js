$(document).ready(function(){
    $('a[href^="#form"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

    $('a[href^="#about_me"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

    $('a[href^="#porfolio"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
    
    $('a[href^="#feedbacks"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

    $('a[href^="#header"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
    
 
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
        $('.arrow').fadeIn();
        } else {
        $('.arrow').fadeOut();
        }
        });
         
        $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
    
    $('.feedback_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
    });

    $('a.btn_form').click( function(event){
        event.preventDefault();
        $('#myOverlay').fadeIn(297,	function(){
          $('#myModal') 
          .css('display', 'block')
          .animate({opacity: 1}, 198);
        });
      });
    
      $('#myModal__close, #myOverlay').click( function(){
        $('#myModal').animate({opacity: 0}, 198, function(){
          $(this).css('display', 'none');
          $('#myOverlay').fadeOut(297);
        });
      });
});