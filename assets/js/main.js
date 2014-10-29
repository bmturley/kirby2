// ++++++++++++++++++++
// SETUP FUNCTIONS
// ++++++++++++++++++++

function resetTitles() {
  $('.active').removeClass('active');
  $('.navTab').each(function() {
    $(this).html($(this).data('title'));
  });
}

$.fn.spin = function(opts) {
  this.each(function() {
    var $this = $(this),
        data = $this.data();

    if (data.spinner) {
      data.spinner.stop();
      delete data.spinner;
    }
    if (opts !== false) {
      data.spinner = new Spinner($.extend({color: $this.css('color')}, opts)).spin(this);
    }
  });
  return this;
};

function sortGrid() {

  $('.imagesWrapper').masonry({
    itemSelector : '.projectBlock',
    isFitWidth: true,
    isAnimated: !Modernizr.csstransitions
  });
}


function closeNav() {
  var content = $('.content');
  if (content.is('.openInfo,.openMenu')) {
    resetTitles();
    content.css('margin', '0').transition({ right: '0', left: '0' }, function(){
    sortGrid();
    }).removeClass('openInfo').removeClass('openMenu');
  }
}

// ++++++++++++++++++++
// INITILIZE PAGE
// ++++++++++++++++++++

$(document).pjax('a.pjax', '.content',{ timeout: 3500 });



$('div.info, ul.menu').jScrollPane({ verticalDragMinHeight: 20, verticalDragMaxHeight: 150 });

$('.title a').hover(function() {
  $(this).find('span').css('color', '#ff6e68');
  },function() {
    $(this).find('span').css('color', '');
});

$('.content').on('click', function() {
    closeNav();
});

$('.navTab').on('click', function(){

  var $this = $(this),
  windowHalf = ($(window).width() / 2);

  if ($this.hasClass('active')){
      closeNav();
    return false;
  }else if ($this.hasClass('menu')){

    $('.content').css('margin', '0 0 0 1.25em').stop().transition({ right: '0', left: windowHalf }, function(){
      $(this).css('left', '50%');
      resetTitles();
      $this.html('CLOSE');
      $this.add('.brooke').addClass('active');
      sortGrid();
    }).removeClass('openInfo').addClass('openMenu');
  }else if ($this.hasClass('info')){

    $('.content').stop().transition({ right: windowHalf, left: '0', margin: '0 -1.125em 0 0' }, function(){
      $(this).css('right', '50%');
      resetTitles();
      $this.html('CLOSE');
      $this.add('.nipar').addClass('active');
      sortGrid();
    }).removeClass('openMenu').addClass('openInfo');
  }
});



// ++++++++++++++++++++
//   ON WINOW RESIZE
// ++++++++++++++++++++
var delay = (function(){ var timer = 0; return function(callback, ms){ clearTimeout (timer); timer = setTimeout(callback, ms);};})();
$(window).resize(function() {
  delay(function(){
    sortGrid();
    $('div.info, ul.menu').jScrollPane({ verticalDragMinHeight: 20, verticalDragMaxHeight: 150 });
  }, 100);
});

// ++++++++++++++++++++++++
//  PJAX BEFORE SEND / END
// ++++++++++++++++++++++++
$(document).on('pjax:beforeSend', function() {
  $('.imagesWrapper').hide();

    $('body').spin({
      lines: 8, // The number of lines to draw
      length: 13, // The length of each line
      width: 3, // The line thickness
      radius: 25, // The radius of the inner circle
      corners: 0, // Corner roundness (0..1)
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: 'auto', // Top position relative to parent in px
      left: 'auto' // Left position relative to parent in px
    });

  closeNav();
});


// ++++++++++++++++++++
//    AFTER PJAX
// ++++++++++++++++++++
$(document).on('ready pjax:end', function() {

  $('.imagesWrapper').show();

  $('.projectBlock').imagesLoaded({
    callback: function(){
      $('body').spin(false);
      $(this).find('img').css('opacity', '1').addClass('loaded').hover(function() {
        $(this).stop().transition({opacity: 0.25}).parent().siblings('h2').transition({opacity: 1});
        },function() {
        $(this).stop().transition({opacity: 1}).parent().siblings('h2').transition({opacity: 0});
      });
      sortGrid();
    }
  });

  $('.projectBlock.video a').click(function(){
    var $this = $(this),
    videoLink = $this.attr('href'),
           vw = 'width="' + $this.data('width') + '"',
           vh = 'height="' + $this.data('height') + '"',
           caption = $this.data('caption');

      $('body').append('<div class="videoOverlay"><div class="videoFrame"></div></div><h1 class="closer">&#215;</h1>');

      $('.videoOverlay')
        .find('.videoFrame').html('<iframe src="' +  videoLink + '"' + vw + vh + 'frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe><h2 class="videoCaption"> ' + caption + '</h2>')
        .end().fadeIn(200).fitVids();

      $('.closer').fadeIn(400).click(function(){
        $('.videoOverlay').add(this).remove();
      });

      $('h1.title').click(function(){
        $('.closer, .videoOverlay').remove();
      });

      $(document).keydown(function(e){
        var code = e.which; // recommended to use e.which, it's normalized across browsers
        if(code===27){
          $('.closer, .videoOverlay').remove();
        }
      });

    return false;
  });

});







