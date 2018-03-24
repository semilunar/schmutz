var $draggable = $('.draggable').draggabilly();

$('.item').click(function(){
  var name = $(this).data('name');
  var author = $(this).data('author');
  var year = $(this).data('year');
  var location = $(this).data('location');

  $('.thing-name').text(name);
  $('.thing-author').text(author);
  $('.thing-year').text(year);
  $('.thing-location').text(location);

});

var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');

  $('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
