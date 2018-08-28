
$(document).ready(function(){

    //  прокрутка
    $('#fullpage').fullpage({
        menu: '#menus'
    });

      // основное меню
    $('.btn__nav_btn').on('click', function(e){
        e.preventDefault();
        $('.nav__tablets').addClass('nav__tablets_activ');
    });

     $('.nav__tablets_closes').on('click', function(e){
        e.preventDefault();
         $('.nav__tablets').removeClass('nav__tablets_activ');
     });

     $('.nav__tablets_elem').on('click', function(e){
       
         $('.nav__tablets').removeClass('nav__tablets_activ');
         console.log('!');
     });



    //  блок команда

      $('.accordeon-team__elem').on('click', function(e){
        e.preventDefault();
        $('.accordeon-team__elem').not(this).removeClass('accordeon-team__elem_activ');
        $(this).toggleClass('accordeon-team__elem_activ').next('accordeon-team__elem').slideToggle();
      });

      
   


  //  меню

  $('.accordeon-menu__btn').on('click', function(e){
    e.preventDefault();
       $('.accordeon-menu__list').addClass('accordeon-menu__list_active');
       if($(this).closest('.accordeon-menu__elem').hasClass('accordeon-menu__elem_activ')) {
           $('.accordeon-menu__elem').removeClass('accordeon-menu__elem_activ');
           $(this).closest('.accordeon-menu__elem').removeClass('accordeon-menu__elem_activ');
       } else {
           $('.accordeon-menu__elem').removeClass('accordeon-menu__elem_activ');
           $(this).closest('.accordeon-menu__elem').addClass('accordeon-menu__elem_activ')
       }

   });

   $('.accordeon-menu__close').on('click', function(e){
    e.preventDefault();
       $('.accordeon-menu__list').removeClass('accordeon-menu__list_active');
       $('.accordeon-menu__elem').removeClass('accordeon-menu__elem_activ');
       

   });


//    $('.accordeon-menu__elem').on('click', function(e){
//      e.preventDefault();
//         $('.accordeon-menu__list').addClass('accordeon-menu__list_active');
//         $('.accordeon-menu__elem').not(this).removeClass('accordeon-menu__elem_activ');
//    $(this).toggleClass('accordeon-menu__elem_activ').next('accordeon-menu__elem').slideToggle();
//     });

//      $('.accordeon-menu__close').on('click', function(e){
//          e.preventDefault();
//          $('.accordeon-menu__list').removeClass('accordeon-menu__list_active');
//     $('.accordeon-menu__elem').removeClass('accordeon-menu__elem_activ');
//         });

    //  блок бургер
    $('.burger__list').slick();


    // отзывы

    $('.button__rev').on('click', function(e){
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

        myMap.behaviors.disable('scrollZoom');
            
    });

    // form

    const myForm = document.querySelector('#myForm');
    const sendButton = document.querySelector('#sendButton');

    sendButton.addEventListener('click', event => {
        event.preventDefault();

        
            if (validateForm(myForm)) {
                const data = {
                    nameFirst: myForm.elements.nameFirst.value,
                    phone: myForm.elements.phone.value,
                    email: myForm.elements.email.value,
                    // street: myForma.elements.street.value,
                    // house: myForma.elements.house.value,
                    // float: myForma.elements.float.value,
                    // number: myForma.elements.number.value,
                    comment: myForm.elements.comment.value
                    // radio: myForma.elements.radio.checked,
                    // checkbox: myForma.elements.checkbox.checked
                   

                };
                
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'json';
                xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
                xhr.send(JSON.stringify(data));
                xhr.addEventListener('load', () => {
                    if (xhr.response.status) {
                        console.log('Все заполнено!');
                    }
                });
            }

    });

    function validateForm(form) {
        let valid = true;

        if (!validateField(form.elements.nameFirst)) {
            valid = false;
        }
        if (!validateField(form.elements.phone)) {
            valid = false;
        }
        if (!validateField(form.elements.email)) {
            valid = false;
        }
        if (!validateField(form.elements.street)) {
            valid = false;
        }
        if (!validateField(form.elements.house)) {
            valid = false;
        }
        if (!validateField(form.elements.float)) {
            valid = false;
        }
        if (!validateField(form.elements.number)) {
            valid = false;
        }
        if (!validateField(form.elements.comment)) {
            valid = false;
        }
        if (!validateField(form.elements.radio)) {
            valid = false;
        }
        if (!validateField(form.elements.checkbox)) {
            valid = false;
        }

        return valid;
    }

    function validateField(field) {
         field.nextElementSibling.textContent = field.validationMessage;
         return field.checkValidity();
    }


    $('#sendButton').on('click', function(e){
        e.preventDefault();
      $('.form__open').addClass('form__open_activ');
      });
  
       $('#formClose').on('click', function(e){
        e.preventDefault();
       $('.form__open').removeClass('form__open_activ');
       });




    //   видео

    function videoPlay() {
        $('#video__video').get(0).play();
        $('#video__video-play').css('display','none');
        $('#play__stop').css('display','block');
    }
    function videoPause () {
        $('#video__video').get(0).pause();
        $('#play__stop').css('display','none');
    }

    let flagVideo = 0;
    function videoStop() {
        
       

        if (flagVideo == 0) {
            $('#video__video').get(0).pause();
            $('#play__stop').css('display','none');
            // $('#play__stop').css('display','block');
            flagVideo = 1;
        }  else {
            $('#video__video').get(0).play();
            $('#play__stop').css('display','block');
            flagVideo = 0;
        }
        
    }

    let video = document.getElementById('video__video');
    let line = document.getElementById('play__line-time');

    let Flagvolume = 0;
    function volume() {
        if(Flagvolume == 0){
            video.volume = 0;
            Flagvolume = 1;
        } else {
            video.volume = 1;
            Flagvolume = 0;
        }
        


    }
    
    $('#video__video-play').on('click', videoPlay);
    $('#play__play').on('click', videoStop);
    $('#play__stop').on('click', videoPause);
    $('#play__volum').on('click', volume);
//   -------------



    video.addEventListener('timeupdate', function() {
            let porsent = Math.floor((100/ video.duration)* video.currentTime);
            line.style.width = porsent + '%' ;

    });

    volumeControl = document.getElementById('volume'),
    volumeControl.addEventListener('input', function () {
         
        video.volume = volumeControl.value;
    }, false);


   
});