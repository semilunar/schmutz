$(document).ready(function() {

var $draggable = $('.draggable').draggabilly();

$('.element-item').click(function(){
  var name = $(this).data('name');
  var author = $(this).data('author');
  var year = $(this).data('year');
  var location = $(this).data('location');

  $(".panel").removeClass('none');

  $('.thing-name').text(name);
  $('.thing-author').text(author);
  $('.thing-year').text(year);
  $('.thing-location').text(location);

})

 $('.quit').click(function () {
    $(".panel").addClass('none');
   });

   $('.element-item').click(function () {
     $(".panel").toggleClass('display'); return false;
     });

});
