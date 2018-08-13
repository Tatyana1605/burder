
$(document).ready(function(){

 $('.btn__nav_btn').on('click', function(e){
   e.preventDefauilt();
    $('.nav__tablets').addClass('nav__tablets_activ');
 });

 $('.nav__tablets_closes').on('click', function(e){
  e.preventDefauilt();
  $('.nav__tablets').removeClass('nav__tablets_activ');
 });

});