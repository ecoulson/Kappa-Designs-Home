(function (meme) {
  var meme = setInterval(function () {
    $('.type').typeIt({strings: '...', speed: 50, autoStart: true});
  }, 1000);
  setTimeout(function () {
    $(window).scrollTop(0);
    $(document).scrollTop(0);
  }, 4000);
  setTimeout(function () {
    $('.loader-container').fadeOut(500);
    clearInterval(meme);
  }, 4500);
})("meme")

var Carousel = function () {
  this.interval;
  var $container = $('.people-container');
  var $slides = $('.people-slide');
  var $next = $('.slide-next');
  var $prev = $('.slide-prev');
  var $dots = $('.slide-dots');
  this.i = setInterval(function () {
    if ($(window).width() < 745) {
      next();
    }
  }, 5000);

  var currentSlide = 1;
  var slideCount = 2;

  var getSlide = function () {
    return currentSlide;
  }

  var next = function () {
    currentSlide++;
    if (currentSlide > slideCount) {
      currentSlide = 1;
    }
    $slide = $container.find('#slide-' + currentSlide);
    $slides.hide();
    $slide.fadeIn(250);
  }

  var prev = function () {
    if (currentSlide <= 1) {
      currentSlide = slideCount;
    }
    $slide = $container.find('#slide-' + currentSlide);
    $slides.hide();
    $slide.fadeIn(250);
  }

  $next.click(function () {
    next();
  })

  $prev.click(function () {
    prev();
  })

  $dots.click(function () {
    $this = $(this);
    var id = $this.prop('id').substring(4,5);
    currentSlide = id;
    var $slide = $container.find('#slide-' + id);
    $slides.hide();
    $slide.fadeIn(250);
  })

  var set = function (meme) {
    clearInterval(this.interval);
    this.interval = setInterval(function () {
      next();
    }, 5000);
    if (meme !== undefined) {
      meme();

    }
  }

  var clear = function () {
    clearInterval(this.interval);
  }

  var hide = function () {
    $slides.hide();
  }

  var show = function () {
    $slides.show();
  }

  return {
    getSlide: getSlide,
    next: next,
    prev: prev,
    set: set,
    clear: clear,
    hide: hide,
    show: show
  }
}

var app = function () {
  var $menuClose = $('.menu-close');
  var $menuOpen = $('.menu-container');
  var $menuPlate = $('.menu-plate');
  var $menuContainer = $('.menu-main-container');
  var $menuItem = $('.menu-item');
  var $slidingTitle = $('.desc-animated');
  var $projectContainer = $('.project-container');
  var $kappa = $('.kappa-title');
  var $back = $('.back-link');
  var $projectSlide = $('.project-slide');
  var $toAbout = $('.scroll-to-bottom');
  var $carousel = $('.people-container'); //should be setCarousel()
  var $peopleSlide =$('.people-slide'); //should be setPeople()

  var $projectSlide1 = $('#project-slide-1');
  var $projectSlide2 = $('#project-slide-2');
  var $projectSlide3 = $('#project-slide-3');
  var $rowToHide = $('.project-row-2');

  var $kicker = $('.about-kicker');

  var menuWidth = '100vw';
  var titleWidth = 300;
  var animateIndex = -1;
  var animateText = ['Create','Design','Inspire','Love'];
  var carousel = new Carousel();
  this.typed = false;

  //events
  var typeOut = function () {
    if ($(window).scrollTop() > $(window).height() && !this.typed) {
      $kicker.typeIt({strings: 'We Help You Reach A Larger Audience', speed: 50, autoStart: false});
      this.typed = true;
    }
  }

  $toAbout.click(function (e) {
    e.preventDefault();
    var viewportHeight = $(window).height();
    $('html, body').animate({
        scrollTop: viewportHeight
    }, 1000);
    setTimeout(function () {
      $kicker.typeIt({strings: 'We Help You Reach A Larger Audience', speed: 50, autoStart: false});
    }, 1000);
  })

  $(window).resize(function () {
    var width = $(window).width(), height = $(window).height();
    if($(window).width() != width && $(window).height() != height){
      if ($(window).width() < 745) {
        carousel.hide();
      } else {
        carousel.show();
      }
    }
  });


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

  $menuItem.click(function() {
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
    $visibleEle.find('.overlay-container').show();
    $visibleEle.find('.overlay').css({
      'background-color':'rgba(11, 153, 187, 0.4)'
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
    $visibleEle.find('.overlay-container').hide();
    $visibleEle.find('.overlay').css({
      'background-color':'rgba(0,0,0,0)'
    });
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
      'left':'-400%'
    })

    $clickedSlide.css({
      'transition':'left 0.75s ease-in-out',
      'left':'0',
    })
    setTimeout(function () {
      $clickedSlide.css({
        'position':'static'
      })
      $rowToHide.hide();
    }, 750);
  })

  $(window).scroll(function () {
    typeOut();
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
    $rowToHide.show();
    setTimeout(function () {
      $projectSlide.css({
        'transition':'left 0.75s ease-in-out',
        'left':'400%',
        'position':'absolute'
      })
    }, 100);
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
      'left':'400%',
      'position':'absolute'
    })
    setTimeout(function () {
      $projectSlide.css({
        // 'display':'none'
      })
    }, 750)
  }
//Dank Meme Here
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
    var innerWidth = menuWidth;
    $menuContainer.css({
      'width': innerWidth
    })
    startAnimationTitle();
    animateTitle();
    if ($(window).width() < 745) {
      carousel.hide();
    }
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
  var emailString = 'mailto:kappadesignsco@gmail.com?subject='+$('.subject').val()+'&body='+$('#emailbod').val()+'&cc='+$('.cc').val()+'';
  email = window.open(emailString);
  setTimeout(function () {
    email.close();
  }, 1000);
}
