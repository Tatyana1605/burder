
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
     $('accordeon-team__elem').removeClass('accordeon-team__elem_activ');
     $(this).toggleClass('accordeon-team__elem_activ');
   });
    
   $('accordeon-team__elem').on('click', function(e){
     e.preventDefault(); 
     $('accordeon-team__elem').removeClass('accordeon-team__elem_activ');
     $(this).removeClass('accordeon-team__elem_activ');
   });


  //  меню

   $('.accordeon-menu__elem').on('click', function(e){
    e.preventDefault();
   $('accordeon-menu__elem').removeClass('accordeon-menu__elem_activ');
   $(this).toggleClass('accordeon-menu__elem_activ');
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


});