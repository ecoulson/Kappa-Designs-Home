function Title(words) {
  this.words = words;
  this.index = 0;
  this.$titleContainer = $('.desc-title');
  this.$titleInner = $('.desc-animated')
  this.$titleInner.text(this.words[this.index]);

  this.slide = function () {
    if (this.index === this.words.length) {
      this.index = 0;
    }
    this.$titleInner.animate({
      width: '0',
      padding: '5px 0'
    }, 1000)
    setTimeout(function () {
      this.$titleInner.text(this.words[this.index]);
      this.$titleInner.animate({
        width: '150',
        padding: '5px 15px'
      }, 1000)
      this.index++;
    }.bind(this), 1000);

  };
}



$(function() {
  //config
  smoothScool(500);
  $.scrollify({
    section : ".section",
    scrollSpeed: 600,
  });

  var $hamburger = $('.hamburger');
  var $overlay = $('.overlay');

  var title = new Title(['Kappa','meme','design']);

  setInterval(function () {
    title.slide();
  }, 5000);

  $hamburger.click(function (e) {
    e.preventDefault();
    if ($hamburger.hasClass('is-active')) {
      $hamburger.removeClass('is-active')
      $overlay.slideUp();
    } else {
      $hamburger.addClass('is-active');
      $overlay.slideDown();
    }
  })
});

function smoothScool (duration) {
  $('a[href^="#"]').on('click', function(event) {
    if ($($(this)).prop('id') != '#next' && $($(this)).prop('id') != '#prev') {
      var target = $( $(this).attr('href') );
      if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, duration);
      }
    }
  });
}
