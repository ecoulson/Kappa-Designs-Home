var app = function () {
  var $menuClose = $('.menu-close');
  var $menuOpen = $('.menu-container');
  var $menuPlate = $('.menu-plate');
  var $menuContainer = $('.menu-main-container');
  var $slidingTitle = $('.desc-animated');
  var $projectContainer = $('.project-container');
  var $kappa = $('.kappa-title');

  var menuWidth = 300;
  var animateIndex = -1;
  var animateText = ['Create','Design','Inspire','Love'];

  //events
  $menuOpen.click(function () {
    $menuPlate.css({
      'transition':'1s width ease-in-out',
      'width':menuWidth
    });
  })

  $menuClose.click(function () {
    $menuPlate.css({
      'transition':'1s width ease-in-out',
      'width':'0'
    })
  })

  $projectContainer.mouseenter(function () {
    var $project = $("#" + $(this).prop('id'));
    var $visibleEle = $project.find('.project-visible');
    $project.find('.hidden-hover').fadeIn(500);
    $visibleEle.find('.overlay').css({
      'background-color':'rgba(255, 255, 255, 0)'
    });
    $visibleEle.find('.logo').css({
      '-webkit-animation': 'logo-animate 0.5s',
      '-moz-animation':'logo-animate 0.5s',
      '-o-animation':'logo-animate 0.5s',
      'animation':'logo-animate 0.5s',
      'animation-fill-mode': 'forwards'
    })
  })

  $projectContainer.mouseleave(function () {
    var $project = $("#" + $(this).prop('id'));
    var $visibleEle = $project.find('.project-visible');
    $project.find('.hidden-hover').fadeOut(500);
    $visibleEle.find('.overlay').css({
      'background-color':'white'
    });
    $visibleEle.find('.logo').css({
      '-webkit-animation': 'none',
      '-moz-animation':'none',
      '-o-animation':'none',
      'animation':'none'
    })
  })

  //functions
  var startAnimationTitle = function() {
    updateIndex();
    $slidingTitle.text(animateText[animateIndex]);

    $slidingTitle.css({
      'transition':'1s width ease-in-out',
      'width':menuWidth
    })
  }

  var animateTitle = function () {
    setInterval(function () {
      $slidingTitle.css({
        'transition':'0.5s width ease-in-out',
        'width':'0'
      })

      setTimeout(function () {
        $slidingTitle.css({
          'color':'rgba(0, 0, 0, 0)'
        })
      }, 200);

      setTimeout(function () {
        updateIndex();
        $slidingTitle.text(animateText[animateIndex]);
      }, 500);

      setTimeout(function () {
        $slidingTitle.css({
          'transition':'0.5s width ease-in-out',
          'width':menuWidth,
        })
      }, 500);

      setTimeout(function () {
        $slidingTitle.css({
          'color':'White'
        })
      }, 800);
    }, 5000);
  }

  var updateIndex = function () {
    animateIndex++;
    if (animateIndex == animateText.length) {
      animateIndex = 0;
    }
  }

  var init = function () {
    var innerWidth = menuWidth - 15;
    $menuContainer.css({
      'width': innerWidth
    })
    startAnimationTitle();
    animateTitle();
  }

  return {
    init: init
  }
}

$(document).ready(function () {
  kappa = new app();
  kappa.init();
  smoothScool(1000);
})

function smoothScool (duration) {
  $('a[href^="#"]').on('click', function(event) {
    if ($($(this)).prop('id') != '#next' && $($(this)).prop('id') != '#prev') {
      var target = $( $(this).attr('href') );
      $('.menu-container').addClass("animation-target-scale-down");
      $('.menu-container').removeClass("animation-target-scale-up");
      setTimeout(function () {
        $('.menu-overlay').slideUp(500);
      }, 100);
      setTimeout(function() {
      }, 600);
      if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, duration);
      }
    }
  });
}

function sendMail() {
  var emailString = 'mailto:kappdesignsco@gmail.com?subject='+$('.subject').val()+'&body='+$('#emailbod').val()+'&cc='+$('.cc').val()+'';
  email = window.open(emailString);
  setTimeout(function () {
    email.close();
  }, 1000);
}
