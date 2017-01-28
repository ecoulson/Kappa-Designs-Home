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
    standardScrollElements: ".sroll"
  });

  var $hamburger = $('.hamburger');
  var $overlay = $('.overlay');
  var $card = $('#card');
  var $cardFlip = $('#email-button');
  var $emailFlip = $('#card-button');
  var $menu = $('.flex-menu');
  var $missionBtn = $('.see-mission');
  var $backBtn = $('.back-btn');

  var title = new Title(['Kappa','meme','design']);
  var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1,
  }

  setInterval(function () {
    title.slide();
  }, 5000);

  $(window).resize(function () {
    $(".clear-fix-about").css({
      'padding-bottom':100
    })
  })

  $missionBtn.click(function (e) {
    $(this).parent().css({
      'transition':'margin-left 0.5s ease',
      'margin-left':'-45%'
    })
  })

  $backBtn.click(function (e) {
    $missionBtn.parent().css({
      'margin-left':'5%'
    })
  })

  $menu.click(function (e) {
    $overlay.slideUp();
    $hamburger.removeClass('is-active')
  })

  $cardFlip.click(function (e) {
    $card.addClass('flipped');
  })

  $emailFlip.click(function (e) {
    sendMail();
    $card.removeClass('flipped');
  })

  $hamburger.click(function (e) {
    if ($hamburger.hasClass('is-active')) {
      $hamburger.removeClass('is-active')
      $overlay.slideUp();
    } else {
      $hamburger.addClass('is-active');
      $overlay.slideDown();
    }
  })

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
    })
  }
})

function sendMail() {
  var emailString = 'mailto:kappadesignsco@gmail.com?subject='+$('.subject-input').val()+'&body='+$('#email-content').val()+'&cc='+$('.cc-input').val()+'';
  email = window.open(emailString);
  setTimeout(function () {
    email.close();
  }, 1000);
}
