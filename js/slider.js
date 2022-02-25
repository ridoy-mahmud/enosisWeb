var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: false,
    dots: false
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [2000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})