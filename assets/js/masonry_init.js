function resetTiles() {
  $('.masonry').masonry(
    {
      itemSelector: ".block",
      isFitWidth: true,
      isAnimated: !Modernizr.csstransitions
    });
}

$(document).ready(function(){
  resetTiles();
});

$(document).ready(function(){
  $('#tab').on('click', function(){
    if ($('#tab').hasClass('open')) {
      closeDrawer();
      return false;
    }
    else {
      openDrawer();
    }
   });
});

function openDrawer() {

  var windowHalf = ($(window).width() / 2);
  $('#content').stop().transition({right: windowHalf}, 300, function(){
    resetTiles();
  });  

  
  $('#tab').css('color', '#fff').html('close');

  $('#tab').addClass('open'); 
}

function closeDrawer() {

  $('#content').css('margin', '0').transition({ right: '0'}, function(){
    resetTiles();
  });

  $('#tab').css('color', '#000').html('info');

  $('#tab').removeClass('open');
}


$(function() {

  console.log('fancybox is working');

  $('.masonry a').fancybox();



});