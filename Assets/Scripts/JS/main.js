var app = function () {
  var $menuClose = $('.menu-close');
  var $menuOpen = $('.menu-container');
  var $menuPlate = $('.menu-plate');
  var $menuContainer = $('.menu-main-container');
  var $slidingTitle = $('.desc-animated');
  var $projectContainer = $('.project-container');
  var $kappa = $('.kappa-title');
  var $back = $('.back-link');
  var $projectSlide = $('.project-slide');

  var $projectSlide1 = $('#project-slide-1');
  var $projectSlide2 = $('#project-slide-2');
  var $projectSlide3 = $('#project-slide-3');

  var menuWidth = '100vw';
  var titleWidth = 300;
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

  $kappa.mouseenter(function () {
    $kappa.find('.letter-up').css({
      '-webkit-animation': 'title-animate-down 1s',
      '-moz-animation':    'title-animate-down 1s',
      '-o-animation':      'title-animate-down 1s',
      'animation':         'title-animate-down 1s',
      'animation-fill-mode': 'forwards'
    })

    $kappa.find('.letter-down').css({
      '-webkit-animation': 'title-animate-up 1s',
      '-moz-animation':    'title-animate-up 1s',
      '-o-animation':      'title-animate-up 1s',
      'animation':         'title-animate-up 1s',
      'animation-fill-mode': 'forwards'
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
    $project.find('.hidden-hover').fadeOut(1);
    $visibleEle.find('.logo').css({
      '-webkit-animation': 'none',
      '-moz-animation':'none',
      '-o-animation':'none',
      'animation':'none'
    })
  })

  $projectContainer.click(function () {
    var $project = $("#" + $(this).prop('id'));
    var $clickedSlide = getSlide($project);

    $projectContainer.css({
      'transition':'left 0.75s ease-in-out',
      'left':'-200%'
    })

    $clickedSlide.css({
      'transition':'left 0.75s ease-in-out',
      'left':'0',
      // 'display':'block'
    })
    setTimeout(function () {
      $clickedSlide.css({
        'position':'static'
      })
    }, 750);
  })

  $back.mouseenter(function () {
    $arrw = $(this).find('img');
    $arrw.prop('src','Assets/Images/back-hover.svg');
  })

  $back.mouseleave(function () {
    $arrw = $(this).find('img');
    $arrw.prop('src','Assets/Images/back.svg');
  })

  $back.click(function () {
    $projectContainer.css({
      'transition':'left 0.75s ease-in-out',
      'left':'0%'
    })

    $projectSlide.css({
      'transition':'left 0.75s ease-in-out',
      'left':'100%',
      'position':'absolute'
    })
    setTimeout(function () {
      $projectSlide.css({
        // 'display':'none'
      })
    }, 750)
  })

  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      closeMenu();
      slideBack();
    }
  })

  //functions

  var closeMenu = function () {
    $menuPlate.css({
      'transition':'1s width ease-in-out',
      'width':'0'
    })
  }

  var slideBack = function () {
    $projectContainer.css({
      'transition':'left 0.75s ease-in-out',
      'left':'0%'
    })

    $projectSlide.css({
      'transition':'left 0.75s ease-in-out',
      'left':'100%',
      'position':'absolute'
    })
    setTimeout(function () {
      $projectSlide.css({
        // 'display':'none'
      })
    }, 750)
  }

  var getSlide = function ($elem) {
    var id = $elem.prop('id');
    if (id.includes('1')) {
      return $projectSlide1;
    } else if (id.includes('2')) {
      return $projectSlide2;
    } else {
      return $projectSlide3;
    }
  }

  var startAnimationTitle = function() {
    updateIndex();
    $slidingTitle.text(animateText[animateIndex]);

    $slidingTitle.css({
      'transition':'1s width ease-in-out',
      'width':titleWidth
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
          'width':titleWidth,
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
