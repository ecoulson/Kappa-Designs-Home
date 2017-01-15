function Title(words) {
  this.words = words;
  this.index = 0;
  this.$titleContainer = $('.sliding-title-container');
  this.$titleInner = $('.sliding-title-inner');
  this.$titleBorder = $('.sliding-title-border');
  this.$titleBorder.height($('.sliding-title-container').height());
  this.$titleInner.text(this.words[this.index]);

  this.slide = function () {
    if (this.index == this.words.length) {
      this.index = 0;
    }
    this.$titleBorder.css({
      'transition':'1s padding-left ease-in-out',
      'padding-top':'10px',
      'padding-bottom':'10px',
      'padding-left':0
    })

    setTimeout(function () {
      this.$titleInner.text('');
    }.bind(this), 300);

    setTimeout(function () {
      console.log(this.words[this.index], this.index);
      this.$titleInner.text(this.words[this.index]);
      this.index++;
    }.bind(this), 1700);

    setTimeout(function () {
      this.$titleBorder.css({
        'transition':'1s padding-left ease-in-out',
        'padding-top':'10px',
        'padding-bottom':'10px',
        'padding-left':this.$titleContainer.width()
      })
    }.bind(this), 1000);
  };
}



$(function() {
  //config
  $.scrollify({
    section : ".section",
    scrollSpeed: 500,
  });

  var $hamburger = $('.hamburger');

  var title = new Title(['Kappa','meme','design']);
  setInterval(function () {
    title.slide();
  }, 5000);

  $hamburger.click(function (e) {
    e.preventDefault();
    if ($hamburger.hasClass('is-active')) {
      $hamburger.removeClass('is-active')
    } else {
      $hamburger.addClass('is-active')
    }
  })
});
