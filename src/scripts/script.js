$(document).ready(function () {

    $("#menu").click(function () {
        $("html").toggleClass("hidden-scroll");
    });
    $("#myNavbar .item-nav .title-nav").click(function () {
        $("html").removeClass("hidden-scroll");
    });

    // Cache selectors
    var lastId,
        topMenu = $(".nav-list"),
        topMenuHeight = topMenu.outerHeight() + 0,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function (id) {
            var item = $(this).attr("href");
            if (item.length) { return item; }
        });
    var heightHeader = $('#header').height();
    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top + heightHeader;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 500);
        e.preventDefault();
    });
    // Bind to scroll
    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        // console.log($(window).scrollTop());
        let heightHeaders = $("#header").height();
        if (windscroll >= heightHeaders) {
            $('.wrapper section').each(function (i) {
                if ($(this).position().top <= windscroll + $('#myNavbar').height()) {
                    $('.item-nav.active-menu').removeClass('active-menu');
                    $('.item-nav').eq(i).addClass('active-menu');
                }
            });
        } else {
            $('.item-nav.active-menu').removeClass('active-menu');
            $('.item-nav:first').removeClass('active-menu');
        }
    }).scroll();


    // responsive menu
    $(".navbar-toggle").click(function () {
        $(".icon-bar").toggleClass("close-menu");
        $(".nav-list").toggleClass("animate-menu");
    });

    $(function () {
        var $win = $(window);
        var $menu = $("#menu");
        $win.on("click.Bst", function (event) {
            if ($menu.has(event.target).length == 0 && !$menu.is(event.target)) {
                $('.nav-list').removeClass("animate-menu");
                $(".icon-bar").removeClass("close-menu");
            }
        });
    });
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('.slider-1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.slider-2').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });
});