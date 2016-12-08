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
  jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
  };
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
  var $readMoreArrw = $('.show-more');
  var $readMoreSVG = $('.show-more-img');
  var $readMore = $('.read-more');
  var displayingReadMore = false;
  $readMoreSVG.rotate(180);
  var $person = $('.person');

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

  $person.mouseenter(function () {
    var $toggle = $(this).find('.toggle');
    $(this).css({
      'cursor':'pointer'
    })
    $toggle.css({
      'display':'block'
    })
  })

  $person.mouseleave(function () {
    var $toggle = $(this).find('.toggle');
    $(this).css({
      'cursor':'normalh'
    })
    $toggle.css({
      'display':'none'
    })
  })

  $readMoreArrw.click(function () {
    if (!this.typed) {
      $kicker.typeIt({strings: 'We Help You Reach A Larger Audience', speed: 50, autoStart: false});
      this.typed = true;
    }
    if (!displayingReadMore) {
      $readMoreSVG.rotate(360);
      $readMore.css({
        transition: 'max-height 0.2s ease-in-out',
        'max-height':'400px',
        overflow:'auto'
      })
      displayingReadMore = true;
    } else {
      $readMoreSVG.rotate(180);
      $readMore.css({
        transition: 'max-height 0.2s ease-in-out',
        'max-height':'0',
        overflow:'hidden'
      })
      displayingReadMore = false;
    }
  })

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
    console.log(window.mobilecheck());
    if (window.mobilecheck()) {
      if($(window).width() != width && $(window).height() != height){
        if (width < 745) {
          carousel.hide();
        }
      }
    } else {
      if (width < 745) {
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

  window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

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
