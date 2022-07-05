var slider = tns({
    container: '.carousel_inner',
    items: 6,
    // slideBy: 'page',
    slideBy: 1,
    autoplay: true,
    controls: false,    // отображение кнопок "назад" "вперед"
    nav: false,    // отображение точек слайдера
    autoplayButtonOutput: false, // отображение кнопки "стоп" "старт"
    speed: 2000,
    autoplayTimeout: 1500
    // controlsText: [
    //     'img/icon/left_button.png',
    //     'img/icon/right_button.png'
    // ]
  });

//   var slider = tns({
//     container: '.carousel_works',
//     items: 6,
//     slideBy: 1,
//     autoplay: true,
//     controls: false,    // отображение кнопок "назад" "вперед"
//     nav: false,    // отображение точек слайдера
//     autoplayButtonOutput: false, // отображение кнопки "стоп" "старт"
//     autoplayTimeout: 2500,
//     speed: 1000,
//     autoplayDirection: 'backward'
//     // fixedWidth: 150,
//     // gutter: 120,
//     // autoWidth: true
//   });


  // код отвечающий за клики по выполняемым работам и появлению 
  // соответствующего текста
  (function($) {
    $(function() {
      $("div.img_list").on("click", "div:not(.content_active)", function() {
        $(this)
          .addClass("content_active")
          .siblings()
          .removeClass("content_active")
          .closest("div.information")
          .find("div.text_list")
          .removeClass("text_active")
          .eq($(this).index())
          .addClass("text_active");
      });
    });
  })(jQuery);

  // если пользователь проскролил более 1000 пикселей, то появляется 
  // класс .pageup(стрелочка в нижней правой части)
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href^='#']").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });



  const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu_close');

  hamburger.addEventListener('click', () => {
      menu.classList.add('active');
  });

  closeElem.addEventListener('click', () => {
      menu.classList.remove('active');
  });
