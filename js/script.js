
$(document).ready(function(){

   $('.btn__nav_btn').onclick('click', function(){
   
    $('.nav__tablets').addClass('nav__tablets_activ');
 });

 $('.nav__tablets_closes').onclick('click', function(){
  
  $('.nav__tablets').removeClass('nav__tablets_activ');
 });


 
});