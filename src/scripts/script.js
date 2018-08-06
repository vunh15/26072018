$(document).ready(function () {

    $("#menu").click(function () {
        $("html").toggleClass("hidden-scroll");
    });
    $("#myNavbar .item-nav .title-nav").click(function () {
        $("html").removeClass("hidden-scroll");
    });

    // scroll landding page
    var lastId,
        topMenu = $("#myNavbar"),
        topMenuHeight = $('#header').outerHeight(),
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });
    

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var banner = $('.banner-container').height();
        var scroll = $(window).scrollTop();

        if (scroll >= banner) {
            $('#header').addClass('fix-top');
        } else {
            $('#header').removeClass('fix-top');
        }

        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active-menu")
                .end().filter("[href='#" + id + "']").parent().addClass("active-menu");
        }
    });

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
        slidesToShow: 4,
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
    $(".custom-color").percircle({ progressBarColor: "#00a99d", percent: 75 });
    $(".custom-color-1").percircle({ progressBarColor: "#00a99d", percent: 92 });
    $(".custom-color-2").percircle({ progressBarColor: "#00a99d", percent: 68 });
    $(".custom-color-3").percircle({ progressBarColor: "#00a99d", percent: 100 });
    $(".custom-color-4").percircle({ progressBarColor: "#00a99d", percent: 83 });
    $(".custom-color-5").percircle({ progressBarColor: "#00a99d", percent: 50 });
});