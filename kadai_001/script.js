$('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: false,
});

$('a').on('mouseover',function(){
    $(this).animate({
        opacity: 0.5,
    },100);
});

$('a').on('mouseout',function(){
    $(this).animate({
        opacity: 1.0,
    },100);
});

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {  
        $('#page-top').fadeIn(); 
      } else {
        $('#page-top').fadeOut();
      }
    });
  
    $('#page-top').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    });
  });

  // なめらかにスクロール
$('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  $(function(){
    $(window).scroll(function (){
      $('.fade-in').each(function(){
        var pos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > pos - windowHeight + 50){
          $(this).addClass('scroll');
        }
      });
    });
  });

  $('.works-photo > img').hover(
    function(){
      $(this).animate({
        opacity: 0.5,
      },100);
    },
    function(){
      $(this).animate({
        opacity: 1,
      },100);
    }
  );

  $('.works-photo > img').on('click', function() {
    let imgSrc = $(this).attr('src'); // クリックされた画像のソースを取得
    $('#modal-image').attr('src', imgSrc); // モーダル内の画像を設定
    $('#modal').fadeIn(); // モーダルを表示
  });

  $('#close-btn').click(function(){
    $('#modal').fadeOut();
  });
