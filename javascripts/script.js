$(document).ready(function() {

var $draggable = $('.draggable').draggabilly();

$('.element-item').click(function(){
  var name = $(this).data('name');
  var author = $(this).data('author');
  var year = $(this).data('year');
  var location = $(this).data('location');

  $('.thing-name').text(name);
  $('.thing-author').text(author);
  $('.thing-year').text(year);
  $('.thing-location').text(location);

})

 $('.quit').click(function () {
   $(".panel").toggleClass('none'); return false;
   });

   $('.element-item').click(function () {
     $(".panel").toggleClass('display'); return false;
     });

})
