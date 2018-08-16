
$(document).ready(function(){

      // основное меню
    $('.btn__nav_btn').on('click', function(e){
        e.preventDefault();
        $('.nav__tablets').addClass('nav__tablets_activ');
    });

     $('.nav__tablets_closes').on('click', function(e){
        e.preventDefault();
         $('.nav__tablets').removeClass('nav__tablets_activ');
     });

    //  блок команда

      $('.accordeon-team__elem').on('click', function(e){
        e.preventDefault();
        $('.accordeon-team__elem').not(this).removeClass('accordeon-team__elem_activ');
        $(this).toggleClass('accordeon-team__elem_activ').next('accordeon-team__elem').slideToggle();
      });

      // $('.accordeon-team__elem_activ').on('click', function(e){
      //   e.preventDefault();
      //   $('.accordeon-team__elem').toggleClass('in').next().slideToggle();
        
      // });

    
  //   $('.accordeon-team__elem').on('click', function(e){
  //       e.preventDefault();
  //       $('.accordeon-team__elem').removeClass('accordeon-team__elem_activ');
  //       $(this).addClass('accordeon-team__elem_activ');
  //  });

  //  $('.accordeon-team__elem').on('click', function(e){
  //       e.preventDefault();
  //       $('.accordeon-team__elem').removeClass('accordeon-team__elem_activ');
  //      $(this).toggleClass('accordeon-team__elem_activ');
  //  });

    // $('accordeon-team__elem').on('click', function(e){
    // e.preventDefault(); 
    // $('accordeon-team__elem').removeClass('accordeon-team__elem_activ');
    // $(this).toggleClass('accordeon-team__elem_activ');
    // });
    
   


  //  меню

   $('.accordeon-menu__elem').on('click', function(e){
    e.preventDefault();
   $('.accordeon-menu__elem').not(this).removeClass('accordeon-menu__elem_activ');
   $(this).toggleClass('accordeon-menu__elem_activ').next('accordeon-menu__elem').slideToggle();
   });

    //  блок бургер
    $('.burger__list').slick();


    // отзывы

    $('.button').on('click', function(e){
      e.preventDefault();
    $('.reviews__comment').addClass('reviews__comment_activ');
    });

     $('.reviews__comment-btn').on('click', function(e){
      e.preventDefault();
     $('.reviews__comment').removeClass('reviews__comment_activ');
     });


      // карта 

      ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.751574, 37.573856],
                zoom: 9
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark([55.951574, 37.173856], {
                hintContent: 'Мы тут',
                balloonContent: 'Мы тут'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/map-marker.png',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-7, -25]
            }),
            myPlacemark2 = new ymaps.Placemark([55.151574, 37.273856], {
              hintContent: 'Мы тут',
              balloonContent: 'Мы тут'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/map-marker.png',
              // Размеры метки.
              iconImageSize: [30, 42],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-1, -33]
          }),
          myPlacemark3 = new ymaps.Placemark([55.451574, 37.273856], {
            hintContent: 'Мы тут',
            balloonContent: 'Мы тут'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-marker.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),
    
            myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'А эта — новогодняя',
                iconContent: '12'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: 'images/ball.png',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });
    
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemark2)
            .add(myPlacemark3);

            // myMap.behaviors.disable('scrollZoom');
            
    });

});