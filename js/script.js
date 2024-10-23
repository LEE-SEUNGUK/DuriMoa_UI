// campland-N3 [YEM2lf6uH2]
(function() {
  $(function() {
    $(".campland-N3").each(function() {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".campland-N3 .contents-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".campland-N3 .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".campland-N3 .swiper-button-next",
          prevEl: ".campland-N3 .swiper-button-prev",
        },
      });
      // Swiper Play, Pause Button
      const pauseButton = $block.find('.swiper-button-pause');
      const playButton = $block.find('.swiper-button-play');
      playButton.hide();
      pauseButton.show();
      pauseButton.on('click', function() {
        swiper.autoplay.stop();
        playButton.show();
        pauseButton.hide();
      });
      playButton.on('click', function() {
        swiper.autoplay.start();
        playButton.hide();
        pauseButton.show();
      });
    });
  });
})();
// campland-N6 [NSM2LF6uW6]
(function() {
  $(function() {
    $(".campland-N6").each(function() {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".campland-N6 .contents-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: ".campland-N6 .swiper-button-next",
          prevEl: ".campland-N6 .swiper-button-prev",
        },
      });
    });
  });
})();