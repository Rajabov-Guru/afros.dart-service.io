$(document).ready(function() {

    $('.item__spoiler').click(function(event) {
        if ($('.services-content').hasClass('one')) {
            $('.item__spoiler').not($(this)).removeClass('active');
            $('.s-wrapper').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);

    });

});
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
const swiper = new Swiper('.monials-slider', {
    // Optional parameters
    loop: true,

    slidesPerView: 1,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1220: {
            slidesPerView: 2,
            spaceBetween: 20,
            direction: 'vertical',
        },
        462: {
            slidesPerView: 1,
            spaceBetween: 20,
            direction: 'vertical',
        },
    },

});
$(document).ready(function() {

    $($('.active').attr('my-href')).show();
    $('.square').click(function(event) {
        var elem = $($(this).attr('my-href'));

        $(elem).show();
        $('.tab-block').not(elem).hide();
        $(this).addClass('active');
        $('.square').not($(this)).removeClass('active');
    });
});